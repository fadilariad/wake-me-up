import {useEffect, useState} from "react";
import {ToastContainer} from "react-bootstrap";
import NotificationsHttp from "../../http/notifications-http";
import Hub from "../../hub/hub";
import NotificationToast from "./notification-toast";
import NotificationModal from "./notification-modal";
import {notificationPermissionStatus} from "./constant";

export default function AppNotification() {

    const [connection, setConnection] = useState(null);
    const [alarm, setAlarm] = useState(null);
    const [notificationPermission, setNotificationPermission] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if ("Notification" in window) {
            setNotificationPermission(Notification.permission);
            if (Notification.permission === notificationPermissionStatus.default) {
                Notification.requestPermission().then(setNotificationPermission);
            }
        } else {
            if (!notificationPermission) {
                setShowModal()
            }
        }

        if (Notification.permission === notificationPermissionStatus.granted && !connection) {
            setConnection(Hub.HubConnection());
            NotificationsHttp.userAcceptNotifications().then();
        }

    }, [connection, notificationPermission])


    useEffect(() => {
        if (connection && !connection._connectionStarted) {
            connection.start().then(
                () => {
                    connection.on("ReceiveNotification", newAlarm => {
                           if(!alarm || !(alarm.id === newAlarm.id)) {
                            setAlarm(newAlarm);
                           }
                    });
                }
            )
                .catch(console.log)
        }
    }, [connection, alarm]);

    function useNotificationPermission(status) {
        setNotificationPermission(status)
    }

    function toastClosed() {
        setAlarm(null);
    }

    return (
        <>
            <NotificationModal onUserAcceptNotification={useNotificationPermission} show={showModal}/>
            <ToastContainer className="p-3" position={'top-left'}>
                {alarm && <NotificationToast alarm={alarm} onClose={toastClosed}/>}
            </ToastContainer>
        </>
    );
}
