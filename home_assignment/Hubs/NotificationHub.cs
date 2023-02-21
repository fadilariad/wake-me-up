using home_assignment.Hubs.Clients;
using home_assignment.Models;
using Microsoft.AspNetCore.SignalR;

namespace home_assignment.Hubs
{
    public class NotificationHub : Hub<INotificationClient>
    {
        public async Task SendNotification(Alarm alarm)
        {
            await Clients.All.ReceiveNotification(alarm);
        }
    }
}
