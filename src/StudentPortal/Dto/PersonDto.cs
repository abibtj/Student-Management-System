﻿using System;

namespace StudentPortal.Dto
{
    public class PersonDto : BaseEntityDto
    {
        public string FirstName { get; set; } 
        public string? MiddleName { get; set; } 
        public string LastName { get; set; } 
        public string Gender { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? DateOfBirth { get; set; }
        public string Roles { get; set; }
    }
}
