using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeeklyDays.Services.WeekDays;

namespace WeeklyDays.Settings
{
    public static class DependencyInjectionSettings
    {
        /// <summary>
        /// Configures Content Factory services
        /// </summary>
        /// <param name="services">The services reference to configure.</param>
        /// <returns>IServiceCollection</returns>
        public static IServiceCollection AddAsPRoTasksServices(this IServiceCollection services)
        {
            services.AddTransient<IWeekDaysService, WeekDaysService>();
            return services;
        }
    }
}
