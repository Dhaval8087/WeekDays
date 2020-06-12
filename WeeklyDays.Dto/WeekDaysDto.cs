using System;
using System.Collections.Generic;
using System.Text;

namespace WeeklyDays.Dto
{
   public class WeekDaysDto
    {
        public string Day { get; set; }
        public bool IsQueryString { get; set; }
        public DateTime CurrentTime { get; set; }
    }
}
