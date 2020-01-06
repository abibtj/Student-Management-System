using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Data;
using StudentPortal.Models;
using StudentPortal.Util;
using StudentPortal.Dto;

namespace StudentPortal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentPortalDbContext _context;

        public StudentsController(StudentPortalDbContext context)
        {
            _context = context;
        }

        // GET: api/Students/GetStudentsGenderByClass
        [HttpGet("GetStudentsGenderByClass")]
        public async Task<IActionResult> GetStudentsGenderByClass()
        {
            var classes = await _context.Classes.Include(x => x.Students).ToListAsync();

            List<int> male = new List<int>();
            List<int> female = new List<int>();
            string[] classNames = { "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"  };

            foreach (var name in classNames)
            {
                int? numberOfMale = classes.Where(c => c.Name == name).FirstOrDefault()?.Students.Where(std => std.Gender == "Male").Count();
                male.Add(numberOfMale ?? 0);
                int? numberOfFemale = classes.Where(c => c.Name == name).FirstOrDefault()?.Students.Where(std => std.Gender == "Female").Count();
                female.Add(numberOfFemale ?? 0);
            }

            object[] response = new object[]
            {
                new 
                { 
                    data = male,
                    label = "Male" 
                },

                new 
                { 
                    data = female,
                    label = "Female" 
                },
            };

            return Ok(response);
        }

        // GET: api/Students/GetStudentsGender
        [HttpGet("GetStudentsGender")]
        public async Task<IActionResult> GetStudentsGender()
        {
            var students = await _context.Students.ToListAsync();

            var response = new int[]
            {
                students.Where(std => std.Gender == "Male").Count(),
                students.Where(std => std.Gender == "Female").Count()
            };

            return Ok(response);
        }

        // GET: api/Students/GetClasses
        [HttpGet("GetClasses")]
        public async Task<IActionResult> GetClasses()
        {
            var classes = await _context.Classes.ToListAsync();
            var response = classes.Select(_class => new
            {
                _class.Id,
                _class.Name
            });

            return Ok(response);
        }

        // GET: api/Students
        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _context.Students.Include(std => std.Class).ToListAsync();
            var response = students.Select(std => new StudentDto
            {
                ClassName = std.Class?.Name?? "",
                DateOfBirth = std.DateOfBirth?.ToShortDateString(),
                FirstName = std.FirstName,
                Gender = std.Gender,
                Id = std.Id,
                LastName = std.LastName,
                MiddleName = std.MiddleName,
                RegNumber = std.RegNumber
            });

            return Ok(response);
        }
        //// GET: api/Students
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        //{
        //    return await _context.Students.ToListAsync();
        //}

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(Guid id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(Guid id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            student.RegNumber = RegNumberGenerator.Generate();
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Student>> DeleteStudent(Guid id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return student;
        }

        private bool StudentExists(Guid id)
        {
            return _context.Students.Any(e => e.Id == id);
        }
    }
}
