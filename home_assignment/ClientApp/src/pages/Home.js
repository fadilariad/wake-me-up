import React, { useEffect, useState} from 'react';
import NewAlarm from "../components/new-alarm/new-alarm";
import {Col, Container, Row} from "react-bootstrap";
import Alarms from "../components/alarms-cards";
import AlarmHttp from "../http/alarm-http";

export function Home() {
    const [alarms, setAlarms] = useState([]);

    async function getAllAlarms() {
        const res = await AlarmHttp.getAllAlarms();
        setAlarms(res)
    }

    useEffect(() => {
        getAllAlarms().then();
    }, [])

    function handleSuccessNewAlarm(alarm) {
        setAlarms([alarm].concat(alarms));
    }

    return (
        <Container>
            <Row>
                <Col><NewAlarm newAlarmAdded={handleSuccessNewAlarm}/></Col>
                <Col><Alarms alarms={alarms}/></Col>
            </Row>
        </Container>
    );
}

