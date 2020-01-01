using StudentPortal.Util;
using System;

namespace StudentPortal.Models
{
    public abstract class BaseEntity : IIdentifiable
    {
        public Guid Id { get; private set; }
        public DateTime CreatedDate { get; protected set; }
        public DateTime UpdatedDate { get; protected set; }

        public BaseEntity()
        {
            CreatedDate = DateTime.UtcNow;
            SetUpdatedDate();
        }

        public virtual void SetUpdatedDate()
            => UpdatedDate = DateTime.UtcNow;
    }
}