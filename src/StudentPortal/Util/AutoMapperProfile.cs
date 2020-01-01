using AutoMapper;
using StudentPortal.Dto;
using StudentPortal.Models;

namespace StudentPortal.Util
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Address, AddressDto>().ReverseMap();
            CreateMap<ParentAddress, ParentAddressDto>().ReverseMap();
            CreateMap<StudentAddress, StudentAddressDto>().ReverseMap();
            CreateMap<Class, ClassDto>().ReverseMap();
            CreateMap<Parent, ParentDto>().ReverseMap();
            CreateMap<Student, StudentDto>().ReverseMap();
            CreateMap<Teacher, TeacherDto>().ReverseMap();
        }
    }
}
