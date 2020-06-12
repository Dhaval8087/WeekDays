using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using WeeklyDays.Settings;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.ApiExplorer;

namespace WeeklyDays
{
    public class Startup
    {
        private readonly IHostingEnvironment _environment;
        public Startup(IHostingEnvironment env)
        {
            _environment = env;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", false)
                .AddJsonFile($"appsettings.Development.json", optional: false);
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                 .AddJsonOptions(options =>
                 {
                     options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                     options.SerializerSettings.AddCustomJsonSettings();
                 });
            services.AddMvcCore()
                .AddVersionedApiExplorer(options =>
                {
                    options.GroupNameFormat = "'v'V";
                    options.SubstituteApiVersionInUrl = true;
                });
            services.AddApiVersioning(o => o.ReportApiVersions = true);
          
            services.AddSwaggerGen(options =>
            {
                var provider = services.BuildServiceProvider().GetRequiredService<IApiVersionDescriptionProvider>();

                foreach (var description in provider.ApiVersionDescriptions.OrderByDescending(_ => _.GroupName))
                {
                    options.SwaggerDoc(description.GroupName, CreateInfoForApiVersion(description));
                }

                // add a custom operation filter which sets default values
                options.DescribeAllEnumsAsStrings();
            });

           
            services.AddAsPRoTasksServices();
           
            services.AddRouting(options => options.LowercaseUrls = true);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        [Obsolete]
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IApiVersionDescriptionProvider provider)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));

            app.UseDeveloperExceptionPage();
            app.UseStatusCodePages();
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseSwagger();
            app.UseSwaggerUI(
                options =>
                {
                    foreach (var description in provider.ApiVersionDescriptions)
                    {
                        options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", description.GroupName.ToUpperInvariant());
                    }
                });

            app.UseCors(builder => builder
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin());
            
           
            app.UseMvc();
        }
        private static Info CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var info = new Info
            {
                Title = $"Pos API {description.ApiVersion}",
                Version = description.ApiVersion.ToString()
            };

            return info;
        }
    }
}
