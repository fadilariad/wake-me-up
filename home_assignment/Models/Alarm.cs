using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace home_assignment.Models
{
    [BsonIgnoreExtraElements]
    public class Alarm
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("description")]
        public string? Description { get; set; } = String.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("dateTime")]
        public DateTime DateTime { get; set; }
        public List<CountryTime>? Countries { get; set; }

    }
}

