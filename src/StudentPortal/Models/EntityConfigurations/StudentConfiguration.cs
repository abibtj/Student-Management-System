﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace StudentPortal.Models.EntityConfigurations
{
    internal class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.RegNumber).HasMaxLength(12).IsRequired();
            builder.HasIndex(x => x.RegNumber).IsUnique(); // Make RegNumber unique
            builder.Property(x => x.FirstName).HasMaxLength(30).IsRequired();
            builder.Property(x => x.MiddleName).HasMaxLength(30);
            builder.Property(x => x.LastName).HasMaxLength(30).IsRequired();
            builder.Property(x => x.Gender).HasMaxLength(6).IsRequired();
            builder.Property(x => x.Email).HasMaxLength(50);
            builder.Property(x => x.PhoneNumber).HasMaxLength(20);

            // Relationships
            builder.HasOne(x => x.Address).WithOne(y => y.Student).HasForeignKey<StudentAddress>(z => z.StudentId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
