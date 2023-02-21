import Http from "./http";

class NotificationsHttp extends Http {
    userAcceptNotifications() {
       return  this.get();
    }
}


export default new NotificationsHttp('/notifications');
