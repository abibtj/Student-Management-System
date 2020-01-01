using System;
using System.Collections.Generic;

namespace StudentPortal.Models
{
    public class Class : BaseEntity
    {
        public Class()
        {
            Students = new HashSet<Student>();
        }
        public string Name { get; set; }
        public string Category { get; set; }

        // Navigation properties 
        public Guid? ClassTeacherId { get; set; }
        public virtual Teacher ClassTeacher { get; set; }

        public virtual ICollection<Student> Students { get; set; }
    }
}
