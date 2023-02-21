import {Alert, Button, Form} from "react-bootstrap";
import {useState} from "react";
import DateTimePicker from "../dateTimePicker";
import AlarmHttp from "../../http/alarm-http";
import {useNavigate} from "react-router-dom";
import {INIT_ALERT_STATE, REQUIRE_FIELD_ERROR, SERVER_ERROR_GENERAL, SUCCESS_ADD_NEW_ALARM} from "./alert-contant";

export default function NewAlarm({newAlarmAdded}) {

    const navigate = useNavigate();
    const [alarm, setAlarm] = useState({
        name: "",
        description: "",
        dateTime: new Date(),
    });

    const [alert, setAlert] = useState(INIT_ALERT_STATE);

    function handleDateChange(date) {
        setAlarm({
            ...alarm,
            dateTime: date
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setAlarm({
            ...alarm,
            [name]: value
        })
    }

    function onSubmit() {
        if (alarm.name && alarm.dateTime) {
            AlarmHttp.addNewAlarm(alarm).then(
                (res) => {
                    if (res.error) {
                        setAlert(SERVER_ERROR_GENERAL);
                    } else {
                        newAlarmAdded(res);
                        setAlert(SUCCESS_ADD_NEW_ALARM(res.Id));
                    }
                }
            );

        } else {
            setAlert(REQUIRE_FIELD_ERROR);
        }
    }

    return (
        <div>
            <h1 className="text-center text-primary">New event</h1>
            {alert.show && <Alert variant={alert.type}
                                  onClose={() => setAlert(INIT_ALERT_STATE)}
                                  dismissible>
                {alert.content}
                {alert.link && <Alert.Link onClick={() => navigate(alert.link)}> Go to event</Alert.Link>}
            </Alert>}
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Event name"
                                  name="name"
                                  value={alarm.name}
                                  onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Event description"
                                  name="description"
                                  label="Description"
                                  value={alarm.description}
                                  onChange={handleChange}/>
                </Form.Group>
            </Form>
            <br/>
            <label>Date and Time</label>
            <DateTimePicker selectedDate={alarm.dateTime} onChange={handleDateChange}/>
            <div style={{marginTop: "20px"}}>
                <Button variant="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    )
}
