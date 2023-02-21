import {dateTimeView} from "./dateTime";

export function dispatchSystemAlert(alarm) {
    const notification = new Notification(alarm.name, {
        icon: "",
        body: dateTimeView(alarm.dateTime).time
    })
    notification.onclick = () => function () {
        window.open(`${Location.hostname}/alarm/${alarm.id}`)
    }
}
