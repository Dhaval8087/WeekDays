using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeeklyDays.Dto;
using WeeklyDays.Services.WeekDays;

namespace WeeklyDays.Controllers.V1
{
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class WeekController : ControllerBase
    {
        private readonly IWeekDaysService _weekDaysService;

        public WeekController(IWeekDaysService weekDaysService)
        {
            _weekDaysService = weekDaysService;

        }
        [HttpGet]
        [Route("get-weekday")]
        [ProducesResponseType(typeof(IReadOnlyCollection<WeekDaysDto>), (int)HttpStatusCode.OK)]

        public ActionResult<IReadOnlyCollection<WeekDaysDto>> GetWeekDays([FromQuery] string value)
        {
            var users = _weekDaysService.GetWeekDay(string.IsNullOrEmpty(value));
            return Ok(users);
        }
        [HttpPost]
        [Route("add-weekday")]
        [ProducesResponseType(typeof(IReadOnlyCollection<WeekDaysDto>), (int)HttpStatusCode.OK)]

        public ActionResult<IReadOnlyCollection<WeekDaysDto>> Add()
        {
            var users = _weekDaysService.AddWeekDay();
            return Ok(users);
        }
    }
}