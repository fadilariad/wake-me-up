import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ({onChange, selectedDate}) {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={1}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            className="form-control dateInput cssDate"
            minDate={new Date()}
        />
    );
}

/*
* TODO => disable time < now today*/
