using System;
using System.Collections.Generic;

namespace StudentPortal.Models
{
    public class Parent : Person
    {
        public Parent()
        {
            Students = new HashSet<Student>();
        }
        public Guid? AddressId { get; set; }
        public virtual ParentAddress Address { get; set; }

        public virtual ICollection<Student> Students { get; set; }
    }
}
