
using home_assignment.DataAccess;
using home_assignment.Hubs;
using home_assignment.Models;
using home_assignment.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews()
        .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null); 


builder.Services.Configure<DBSettings>(
builder.Configuration.GetSection("AlarmsDB"));
builder.Services.AddSingleton<AlarmService>();
builder.Services.AddSingleton<NotificationService>();
builder.Services.AddSingleton<CountriesService>();
builder.Services.AddSingleton<AlarmData>();
builder.Services.AddSingleton<CountriesData>();
builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientPermission", policy =>
    {
        policy.AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:44485")
            .AllowCredentials();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("ClientPermission");
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");
app.MapHub<NotificationHub>("/hubs/notification");
app.MapFallbackToFile("index.html"); ;

app.Run();
