using System;
using System.Collections.Generic;

namespace StudentPortal.Dto
{
    public class TeacherDto : PersonDto
    {
        public string? Position { get; set; }
        public int? GradeLevel { get; set; }
        public int? Step { get; set; }
    }
}