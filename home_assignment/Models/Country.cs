using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace home_assignment.Models
{
    public class Country
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; } = String.Empty;

        [BsonElement("timeZoneName")]
        public string TimeZoneName { get; set; } = String.Empty;
    }
}

