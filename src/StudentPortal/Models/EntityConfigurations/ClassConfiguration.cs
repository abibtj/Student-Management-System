using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace StudentPortal.Models.EntityConfigurations
{
    internal class ClassConfiguration : IEntityTypeConfiguration<Class>
    {
        public void Configure(EntityTypeBuilder<Class> builder)
        {
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).HasMaxLength(20).IsRequired();

            // Relationships
            builder.HasMany(x => x.Students).WithOne(y => y.Class).OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}
