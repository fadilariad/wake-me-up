using home_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace home_assignment.DataAccess
{
    public class AlarmData: DB
    {
        public AlarmData(IOptions<DBSettings> dbSetting) : base(dbSetting) { }

        public async Task<List<Alarm>> GetAll()
        {
            try
            {
                return await _alarmCollection.Find(new BsonDocument()).ToListAsync();
            }
            catch(Exception)
            {
                return new List<Alarm>();
            }
        }

        public async Task<Alarm> GetAlarmById(string id)
        {
            try
            {
                return await _alarmCollection.Find<Alarm>(alarm => alarm.Id == id).SingleAsync();
            }
            catch(Exception)
            {
                return new Alarm();
            }
        }

        public async Task<Alarm> GetAlarmInTimeRange(DateTime start, DateTime end)
        {
            try
            {
                return await _alarmCollection.Find<Alarm>(alarm => alarm.DateTime >= start && alarm.DateTime < end).SingleAsync();
            }
            catch(Exception)
            {
                return new Alarm();
            }
        }

        public async Task<bool> InsertAlarm(Alarm alarm) {
            try
            {
                await _alarmCollection.InsertOneAsync(alarm);
                return true;
            }
            catch(Exception)
            {
                return false;
            }
        }

    }

}
