using System;

namespace StudentPortal.Dto
{
    public class StudentDto : PersonDto
    {
        public string RegNumber { get; set; }

        public string ClassName { get; set; }
        public Guid? ClassId { get; set; }
        public virtual ClassDto Class { get; set; }
        public Guid? ParentId { get; set; }
        public virtual ParentDto Parent { get; set; }
        public Guid? AddressId { get; set; }
        public virtual StudentAddressDto Address { get; set; }
    }
}