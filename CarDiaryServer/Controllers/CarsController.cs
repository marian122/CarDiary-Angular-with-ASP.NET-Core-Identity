using AutoMapper;
using CarDiaryServer.Models;
using CarDiaryServer.Models.Entities;
using CarDiaryServer.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDiaryServer.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CarsController : ControllerBase
    {
        private readonly ICarRepository db;
        private readonly ILogger<CarsController> logger;
        private readonly IMapper mapper;

        public CarsController(ICarRepository db, ILogger<CarsController> logger, IMapper mapper)
        {
            this.db = db;
            this.logger = logger;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //getting all cars for the user
                //var username = this.User.Identity.Name;
                //var userCars = this.repository.GetAllCarsByUser(username, includedCars);
                return Ok(db.GetAllCars());
                //return Ok(mapper.Map<IEnumerable<Car>, IEnumerable<CarViewModel>>(db.GetAllCars()));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get cars: {ex}");
                return BadRequest("Failed to get cars");
            }


        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            try
            {
                var car = db.GetCarById(id);
                return Ok(mapper.Map<Car, CarViewModel>(car));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get cars: {ex}");
                return BadRequest("Failed to get cars");
            }


        }

        [HttpPost]
        public IActionResult Post([FromBody] CarViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newCar = mapper.Map<CarViewModel, Car>(model);

                    db.AddEntity(newCar);
                    db.SaveAll();

                    return Created($"/api/cars/{newCar.Id}", mapper.Map<Car, CarViewModel>(newCar));
                }
                else
                {
                    return BadRequest(ModelState);
                }

            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save the car: {ex}");
            }
            return BadRequest("Failed to save the car");
        }


    }
}
