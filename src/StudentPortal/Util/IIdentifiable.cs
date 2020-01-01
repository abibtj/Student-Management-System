using System;

namespace StudentPortal.Util
{
    public interface IIdentifiable
    {
         Guid Id { get; }
    }
}