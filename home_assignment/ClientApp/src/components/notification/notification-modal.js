import {Button, Modal} from "react-bootstrap";
import {notificationPermissionStatus} from "./constant";

export default function NotificationModal({onUserAcceptNotification, show}) {
    function userAcceptNotifications() {
        onUserAcceptNotification(notificationPermissionStatus.granted);
    }
    function userDeniedNotifications() {
        onUserAcceptNotification(notificationPermissionStatus.denied);
    }
    return(
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Notifications</Modal.Title>
            </Modal.Header>
            <Modal.Body>accept receive notifications</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={userDeniedNotifications}>
                    Denied
                </Button>
                <Button variant="success" onClick={userAcceptNotifications}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
