using System;
using System.Collections.Generic;

namespace StudentPortal.Dto
{
    public class ClassDto : BaseEntityDto
    {
        public string Name { get; set; }
        public string Category { get; set; }

        // Navigation properties
        public Guid? ClassTeacherId { get; set; }
        public virtual TeacherDto ClassTeacher { get; set; }

        public virtual ICollection<StudentDto> Students { get; set; }
    }
}
