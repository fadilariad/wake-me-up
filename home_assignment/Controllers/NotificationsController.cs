using home_assignment.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace home_assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly NotificationService _notificationService;
        public NotificationsController(NotificationService notificationService) {
            _notificationService = notificationService;
        }
        // GET: api/<NotificationsController>
        [HttpGet]
        public void Get()
        {
            _notificationService.Start();
            return;
        }
    }
}
