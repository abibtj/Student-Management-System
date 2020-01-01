using System;

namespace StudentPortal.Util
{
    public class RegNumberGenerator 
    {
       public static string Generate()
        {
            var date = DateTime.UtcNow;
            var surfix = new[] {'A','B','C','D','E','F','G','H','I','J',
                'K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z' };
            var random = new Random();

            return date.ToString("yy") + date.Month.ToString("00") +
                date.Day.ToString("00") + date.Minute.ToString("00") + date.Second.ToString("00") +
                surfix[random.Next(25)] + surfix[random.Next(25)];
        }
    }
}
