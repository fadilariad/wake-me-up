using home_assignment.Hubs;
using home_assignment.Hubs.Clients;
using home_assignment.Models;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace home_assignment.Services
{
    public class NotificationService
    {
        private static System.Timers.Timer _timer = new();
        private readonly IHubContext<NotificationHub, INotificationClient> _notificationHub;
        private readonly AlarmService _alarmService;
        public NotificationService(IHubContext<NotificationHub, INotificationClient> notificationHub, AlarmService alarmService )
        {
            _notificationHub = notificationHub;
            _alarmService = alarmService;
        }

        public void Start()
        {
            _timer.Interval = 1000 * 60 ;
            _timer.Elapsed += new(OnTimedEvent);
            _timer.Start();
        }

        private async void  OnTimedEvent(object sender, System.Timers.ElapsedEventArgs e) { 
            try
            {
                Alarm alarm = await _alarmService.GetAlarmNextMiniut();
                if (alarm.Id != null ) { 
                    await _notificationHub.Clients.All.ReceiveNotification(alarm); 
                }
            }catch(Exception exception)
            {
                Console.WriteLine(exception.ToString());
            }
        }
    }


}
