using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CarDiaryServer.Models;
using CarDiaryServer.Models.Entities;
using Microsoft.AspNetCore.Authorization;

namespace CarDiaryServer.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ICarRepository carRepository;
        private readonly CarDbContext db;

        public HomeController(ILogger<HomeController> logger, ICarRepository carRepository, CarDbContext db)
        {
            _logger = logger;
            this.carRepository = carRepository;
            this.db = db;
        }

        public IActionResult Index()
        {
            var result = this.db.Cars.ToList();
            return View();
        }

        [Authorize]
        public IActionResult Cars()
        {
            var result = carRepository.GetAllCars();

            return View(result);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
