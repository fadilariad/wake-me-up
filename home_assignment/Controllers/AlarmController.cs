using home_assignment.Models;
using home_assignment.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace home_assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlarmController : ControllerBase
    {

        private readonly AlarmService _alarmService;
        public AlarmController(AlarmService alarmService)
        {
            _alarmService = alarmService;
        }

        // GET: api/<AlarmController>
        [HttpGet]
        public async Task<List<Alarm>> Get()
        {
            return await _alarmService.GetAlarms();
        }

        // GET api/<AlarmController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Alarm>> Get(string id)
        {
            try
            {
                Alarm alarm = await _alarmService.GetAlarmById(id);
                return alarm;

            }
            catch (Exception)
            {

                return NotFound();
            }
        }


        // POST api/<AlarmController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Alarm alarm)
        {
             bool success = await _alarmService.CreateAlarm(alarm);
            if (success)
            {
                return CreatedAtAction(nameof(Get), new { id = alarm.Id }, alarm);
            }
            else { 
                return BadRequest();
            }
        }
    }
}
