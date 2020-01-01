using System;

namespace StudentPortal.Models
{
    public class Teacher : Person
    {
        public string? Position { get; set; }
        public int? GradeLevel { get; set; }
        public int? Step { get; set; }
    }
}
