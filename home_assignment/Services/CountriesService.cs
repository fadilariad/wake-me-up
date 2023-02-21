using home_assignment.DataAccess;
using home_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace home_assignment.Services
{
    public class CountriesService
    {
        private readonly CountriesData _countriesData;
        public CountriesService(CountriesData countriesData)
        {
            _countriesData = countriesData;
        }
        public async Task<List<CountryTime>> GetCountryTimes(DateTime localTime)
        {

            List<Country> countries = await _countriesData.GetAll(); 
            List<CountryTime> countriesList = new();
            
            foreach (Country country in countries)
            {
                TimeZoneInfo timeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById(country.TimeZoneName);
                CountryTime countryTime = new();
                countryTime.DateTime = localTime.ToUniversalTime().Add(timeZoneInfo.BaseUtcOffset);
                countryTime.CountryName = country.Name;
                countriesList.Add(countryTime);
            }
            return countriesList;
        }
    }
}
