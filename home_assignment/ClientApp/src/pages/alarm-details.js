import {Card, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import AlarmHttp from "../http/alarm-http";
import {useParams} from "react-router-dom";
import {dateTimeView} from "../shared/functions/dateTime";

export default function AlarmDetails() {
    const [alarm, setAlarm] = useState({
        Name: "",
        Description: "",
        DateTime: "",
        Id: ""
    });

    const {id} = useParams();

    async function getAlarm() {
        const res = await AlarmHttp.getAlarmById(id);
        setAlarm(res);
    }

    useEffect(() => {
        getAlarm().then();
    }, [])

    const {date, time} = dateTimeView(alarm.DateTime);
    return (
        <Card className="w-50 me-auto ms-auto">
            <Card.Header as={'h2'} className="text-center">{alarm.Name}</Card.Header>
            <Card.Body>
                <Card.Text>{alarm.Description}</Card.Text>
                {alarm.Countries && alarm.Countries.length > 0 && <ListGroup>
                    {alarm.Countries.map(country => {
                        country.DateTime = country.DateTime.slice(0, -1);
                        return <ListGroup.Item key={country.CountryName} className={'d-flex justify-content-between'}>
                            <span>{dateTimeView(country.DateTime).time}</span>
                            <span>{country.CountryName}</span>
                            <span>{dateTimeView(country.DateTime).date}</span>
                        </ListGroup.Item>
                    })}
                </ListGroup>}
            </Card.Body>
            <Card.Footer><span className="me-3">{date}</span><span>{time}</span></Card.Footer>
        </Card>

    )
}
