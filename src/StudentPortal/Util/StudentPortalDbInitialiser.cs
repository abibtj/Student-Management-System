using Microsoft.EntityFrameworkCore;
using StudentPortal.Data;
using StudentPortal.Models;
using System;
using System.Collections.Generic;

namespace StudentPortal.Util
{
    public class StudentPortalDbInitialiser : IStudentPortalDbInitialiser
    {
        private readonly StudentPortalDbContext _context;

        public StudentPortalDbInitialiser(StudentPortalDbContext context)
            => _context = context;

        public void Initialise()
        {
            _context.Database.EnsureDeleted(); //***ToDo... remove this line later
            _context.Database.Migrate();
            _context.Database.EnsureCreated();

            SeedDb();
            _context.SaveChanges();
        }

        private void SeedDb()
        {
            #region Addresses
            var gwarinpa = new ParentAddress
            {
                Line1 = "75, 4th Avenue, Gwarinpa",
                Town = "Abuja",
                State = "FCT",
                Country = "Nigeria"
            };

            var ikeja = new ParentAddress
            {
                Line1 = "22, Ijoba close",
                Town = "Ikeja",
                State = "Lagos",
                Country = "Nigeria"
            };

            var mowe = new ParentAddress
            {
                Line1 = "Km 4, Lagos-Ibadan express way",
                Town = "Mowe",
                State = "Ogun",
                Country = "Nigeria"
            };

            var oyo = new StudentAddress
            {
                Line1 = "57, Agbabiaka avenue",
                Line2 = "Mobolaje",
                Town = "Oyo",
                State = "Oyo",
                Country = "Nigeria"
            };
           
            var bwari = new ParentAddress
            {
                Line1 = "17, Pmage Layout",
                Line2 = "Ushafa",
                Town = "Bwari",
                State = "FCT",
                Country = "Nigeria"
            };

            #endregion

            #region Parents
            var mrAzeez = new Parent
            {
                FirstName = "Adejare",
                MiddleName = "Omidina",
                LastName = "Azeez",
                Gender = "Male",
                Address = gwarinpa
            };
            
            var mrOlatunji = new Parent
            {
                FirstName = "Abeeb",
                MiddleName = "Akano",
                LastName = "Olatunji",
                Gender = "Male",
                Address = ikeja
            };

            var mrsGrace = new Parent
            {
                FirstName = "Grace",
                MiddleName = "Folasade",
                LastName = "Ale",
                Gender = "Female",
                Address = mowe
            };
           
            var mrsSalimon = new Parent
            {
                FirstName = "Aminat",
                //MiddleName = "Bolanle",
                LastName = "Salimon",
                Gender = "Female",
                Address = bwari
            };
            #endregion

            #region Students
            var azeez1 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Adewale",
                MiddleName = "Qozim",
                LastName = "Azeez",
                Gender = "Male",
                DateOfBirth = DateTime.Now,
                Parent = mrAzeez
            };

            var azeez2 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Adejoke",
                MiddleName = "Fatimah",
                LastName = "Azeez",
                Gender = "Female",
                DateOfBirth = DateTime.Now,
                Parent = mrAzeez
            };

            var azeez3 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Abdul",
                MiddleName = "Olanrewaju",
                LastName = "Azeez",
                Gender = "Male",
                DateOfBirth = DateTime.Now,
                Parent = mrAzeez
            };

            var olatunji = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Rayan",
                MiddleName = "Olamide",
                LastName = "Olatunji",
                Gender = "Male",
                DateOfBirth = DateTime.Now,
                Parent = mrOlatunji
            };
            
            var salimon1 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Almas",
                MiddleName = "Olayemi",
                LastName = "Olatunji",
                Gender = "Female",
                DateOfBirth = DateTime.Now,
                Parent = mrsSalimon
            };

            var salimon2 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Ayman",
                MiddleName = "Alabi",
                LastName = "Olatunji",
                Gender = "Male",
                DateOfBirth = DateTime.Now,
                Parent = mrsSalimon
            };

            var grace1 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Gwen",
                MiddleName = "Ngozi",
                LastName = "Ale",
                Gender = "Female",
                DateOfBirth = DateTime.Now,
                Parent = mrsGrace,
                Address = oyo
            };

            var grace2 = new Student
            {
                RegNumber = RegNumberGenerator.Generate(),
                FirstName = "Chukwuma",
                MiddleName = "Chidozie",
                LastName = "Ale",
                Gender = "Male",
                DateOfBirth = DateTime.Now,
                Parent = mrsGrace,
                Address = oyo
            };

            #endregion

            #region Classes
            var pry1 = new Class
            {
                Name = "Primary 1",
                Category = "Primary",
                Students = new List<Student> { azeez1, grace1 }
            };

            var pry2 = new Class
            {
                Name = "Primary 2",
                Category = "Primary",
                Students = new List<Student> { azeez2, salimon1 }
            };

            var pry3 = new Class
            {
                Name = "Primary 3",
                Category = "Primary",
                Students = new List<Student> { olatunji }
            };

            var pry4 = new Class
            {
                Name = "Primary 4",
                Category = "Primary",
                Students = new List<Student> { salimon2 }
            };

            var pry5 = new Class
            {
                Name = "Primary 5",
                Category = "Primary",
                Students = new List<Student> { grace2 }
            };

            var pry6 = new Class
            {
                Name = "Primary 6",
                Category = "Primary",
                Students = new List<Student> { azeez3 }
            };

            #endregion

            #region Teachers
            var bob = new Teacher
            {
                FirstName = "Rayan",
                MiddleName = "Olamide",
                LastName = "Olatunji",
                Gender = "Male"
            };

            var bola = new Teacher
            {
                FirstName = "Aminat",
                MiddleName = "Bolanle",
                LastName = "Salimon",
                Gender = "Female"
            };

            var tunji = new Teacher
            {
                FirstName = "Abeeb",
                MiddleName = "Olatunji",
                LastName = "Liadi",
                Gender = "Male"
            };
            #endregion

            var classes = new List<Class> { pry1, pry2, pry3, pry4, pry5, pry6};
            _context.Classes.AddRange(classes);

            var appUser = new AppUser
            {
                ConcurrencyStamp = "7e2c8176-a269-4c55-a412-2f2c4f918999",
                Email = "abibtj@gmail.com",
                EmailConfirmed = true,
                Id = "5d3ae745-b0f8-4f6e-ab12-21569162ac1e",
                NormalizedEmail = "ABIBTJ@GMAIL.COM",
                NormalizedUserName = "ABIBTJ@GMAIL.COM",
                PasswordHash = "AQAAAAEAACcQAAAAEOjc9r/ffdgbH3meA/W6ocKE+nYIdXqV+8VvoDZKv1fGEioc+aXA6TyD8rB1Q6AcDA==",
                SecurityStamp = "BWEXMKM7YTDYZUJ6QQI63RLBHOIMWHUR",
                UserName = "abibtj@gmail.com"
            };
            _context.Users.Add(appUser);
        }
    }
}