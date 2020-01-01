using System;

namespace StudentPortal.Models
{
    public class Student : Person
    {
        public string RegNumber { get; set; }
        public Guid? ClassId { get; set; }
        public virtual Class Class { get; set; }
        public Guid? ParentId { get; set; }
        public virtual Parent Parent { get; set; }
        public Guid? AddressId { get; set; }
        public virtual StudentAddress Address { get; set; }
    }
}
