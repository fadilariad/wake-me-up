using home_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace home_assignment.DataAccess
{
    public class CountriesData: DB
    {
        public CountriesData(IOptions<DBSettings> settings)
            :base(settings) { }

        public async Task<List<Country>> GetAll()
        {
            try
            {
                return await _countriesCollection.Find(new BsonDocument()).ToListAsync();
            }
            catch (Exception) {
                return new List<Country>();
            }
        }
    }
}
