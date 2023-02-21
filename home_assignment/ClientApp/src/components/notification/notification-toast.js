import {Button, Toast} from "react-bootstrap";
import {dateTimeView} from "../../shared/functions/dateTime";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {dispatchSystemAlert} from "../../shared/functions/systemAlert";
import {notificationPermissionStatus} from "./constant";

export default function NotificationToast ({alarm, onClose})  {
    const navigate = useNavigate();

    function navigateToAlarm() {
        if (alarm) {
            navigate(`/alarm/${alarm.id}`);
        }
        close();
    }
    useEffect(() => {
        if (Notification.permission === notificationPermissionStatus.granted) {
            dispatchSystemAlert(alarm);
        }
    },[alarm])
    function close()  {
        onClose();
    }
    return(
        <Toast bg={'danger'} className={'bg-opacity-75'}
               onClose={close}>
            <Toast.Header closeButton>
                <strong className="me-auto">{alarm.name}</strong>
            </Toast.Header>
            <Toast.Body>
                <h5>{alarm ? `${dateTimeView(alarm.dateTime).date}  ${dateTimeView(alarm.dateTime).time}` : ''}</h5>
                <Button variant={'link'} onClick={navigateToAlarm}>see event</Button>
            </Toast.Body>
        </Toast>
    );
}
