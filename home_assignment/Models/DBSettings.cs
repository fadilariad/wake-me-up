namespace home_assignment.Models
{
    public class DBSettings
    {
        public string ConnectionURI { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string AlarmsCollectionName { get; set; } = null!;
        public string UserCollectionName { get; set; } = null!;
        public string CountriesCollection { get; set; } = null!;
    }
}