import Http from "./http";

class AlarmHttp extends Http {

    addNewAlarm(alarm) {
       return  this.post(alarm)
    }

    getAllAlarms() {
        return this.get()
    }

    getAlarmById(id) {
       return  this.get('/'+ id);
    }
}


export default new AlarmHttp('/alarm');

