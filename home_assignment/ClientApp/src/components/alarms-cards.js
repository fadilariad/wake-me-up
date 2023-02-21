import {Button, Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {dateTimeView} from "../shared/functions/dateTime";

export default function Alarms({alarms}) {
    return (
        <Row>
            {alarms.map((alarm, i) =>
                <Col key={i} md={6}><AlarmCard alarm={alarm}/> </Col>
            )}
        </Row>
    );
}


function AlarmCard({alarm}) {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate(`/alarm/${alarm.Id}`);
    }
    const {date, time} = dateTimeView(alarm.DateTime);
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{alarm.Name}</Card.Title>
                <Card.Text>{date} <br/> {time}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant={'primary'} onClick={handleButtonClick}>Show More</Button>
            </Card.Footer>
        </Card>
    )
}
