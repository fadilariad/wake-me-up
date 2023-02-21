export function dateTimeView(dateStamp) {

    const dateObj = new Date(dateStamp);
    const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
    const time = `${dateObj.getHours() ? dateObj.getHours() : '00'}:${dateObj.getMinutes() ? dateObj.getMinutes() : '00'}`
    return {date, time};
}
