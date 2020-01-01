using System;
using System.Collections.Generic;

namespace StudentPortal.Dto
{
    public class ParentDto : PersonDto
    {
        public string RegNumber { get; set; }
        public Guid? AddressId { get; set; }
        public virtual ParentAddressDto Address { get; set; }

        public virtual ICollection<StudentDto> Students { get; set; }
    }
}
