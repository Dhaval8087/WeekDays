using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace WeeklyDays.Services.WeekDays
{
    public interface IWeekDaysService
    {
        List<Dto.WeekDaysDto> GetWeekDay(bool isQuery = false);
        List<Dto.WeekDaysDto> AddWeekDay();
    }
    public class WeekDaysService : IWeekDaysService
    {
        public List<Dto.WeekDaysDto> GetWeekDay(bool isQuery = false)
        {
            var weekdays = new List<Dto.WeekDaysDto>();
            var today = DateTime.Today;
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = today.Day + ". " + today.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = today.Date

            });
            var nextDay = today.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            nextDay = nextDay.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            nextDay = nextDay.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            nextDay = nextDay.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            nextDay = nextDay.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            nextDay = nextDay.AddDays(1);
            weekdays.Add(new Dto.WeekDaysDto
            {
                Day = nextDay.Day + ". " + nextDay.DayOfWeek.ToString(),
                IsQueryString = !isQuery,
                CurrentTime = nextDay.Date

            });
            return weekdays;
        }
        public List<Dto.WeekDaysDto> AddWeekDay()
        {
            return new List<Dto.WeekDaysDto>();
        }
    }
}
