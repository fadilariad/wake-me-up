using home_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace home_assignment.DataAccess
{
    public class DB
    {
        public IMongoCollection<Alarm> _alarmCollection;
        public IMongoCollection<Country> _countriesCollection;
        public DB(IOptions<DBSettings> dbSettings)
        {
            MongoClient client = new(dbSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(dbSettings.Value.DatabaseName);
            _alarmCollection = database.GetCollection<Alarm>(dbSettings.Value.AlarmsCollectionName);
            _countriesCollection = database.GetCollection<Country>(dbSettings.Value.CountriesCollection);
        }
    }
}
