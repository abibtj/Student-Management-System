﻿using System;
using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Models
{
    public class Address
    {
        public Guid Id { get; private set; }
        [Required(ErrorMessage = "Address first line is required.")]
        public string Line1 { get; set; }
        public string? Line2 { get; set; } 
        [Required(ErrorMessage = "Town / City name is required.")]
        public string Town { get; set; }
        [Required(ErrorMessage = "State is required.")]
        public string State { get; set; } 
        [Required(ErrorMessage = "Country is required.")]
        public string Country { get; set; }
    }
    public class StudentAddress : Address
    {
        public Guid StudentId { get; set; }
        public virtual Student Student { get; set; }
    }

    public class ParentAddress : Address
    {
        public Guid ParentId { get; set; }
        public virtual Parent Parent { get; set; }
    }
}
