import {HubConnectionBuilder} from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";

export default class Hub{
    static connectionURL = 'https://localhost:7080/hubs/notification'
    static HubConnection() {
        const n = new HubConnectionBuilder()
            .withUrl( this.connectionURL, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();
        console.log(n)
        return n
    }
}
