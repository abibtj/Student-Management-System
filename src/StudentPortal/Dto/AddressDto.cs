using System;
using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Dto
{
    public class AddressDto
    {
        public Guid Id { get; private set; }
        public string Line1 { get; set; }
        public string? Line2 { get; set; }
        public string Town { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }
    public class StudentAddressDto : AddressDto
    {
        public Guid StudentId { get; set; }
        public virtual StudentDto Student { get; set; }
    }
    public class ParentAddressDto : AddressDto
    {
        public Guid ParentId { get; set; }
        public virtual ParentDto Parent { get; set; }
    }
}
