using home_assignment.Models;
namespace home_assignment.Hubs.Clients
{
    public interface INotificationClient
    {
        Task ReceiveNotification(Alarm alarm);
    }
}
