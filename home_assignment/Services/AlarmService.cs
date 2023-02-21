using home_assignment.DataAccess;
using home_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace home_assignment.Services
{
    public class AlarmService
    {
       private readonly CountriesService _countriesService;
       private readonly AlarmData _alarmData;
       public AlarmService(CountriesService countries, AlarmData alarmData)
        {
            _countriesService = countries;
            _alarmData = alarmData;
        }


        public async Task<List<Alarm>> GetAlarms()
        {
             
            return await _alarmData.GetAll(); 
        }

        public async Task<Alarm> GetAlarmById(String id)
        {
            ObjectId objectId = new(id);
            Alarm alarm = await _alarmData.GetAlarmById(objectId.ToString());
            if(alarm.Id!= null)
            {
                DateTime dateObj = Convert.ToDateTime(alarm.DateTime);
                alarm.Countries = await _countriesService.GetCountryTimes(dateObj);
                return alarm;
            }
            else
            {
                throw new Exception("notfound");
            }
             
        }
        public async Task<bool>  CreateAlarm(Alarm alarm)
        {
            return await _alarmData.InsertAlarm(alarm);
            
        }

        public async Task<Alarm> GetAlarmNextMiniut()
        {
            DateTime now = DateTime.Now;
            now = now.AddSeconds(-now.Second);
            DateTime plus1min = now.AddMinutes(1);
            DateTime plus2min = now.AddMinutes(2);
            return await _alarmData.GetAlarmInTimeRange(plus1min, plus2min);
        }
    }
}
