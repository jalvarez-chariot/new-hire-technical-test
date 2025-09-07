namespace Chariot.Api
{
    /// <summary>
    /// Represents a single customer record.
    /// </summary>
    public class Customer
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string MemberSince { get; set; } = string.Empty;
    }
}