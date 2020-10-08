using CarDiaryServer.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace CarDiaryServer.Models
{
    public class CarRepository : ICarRepository
    {
        private readonly CarDbContext db;

        public CarRepository(CarDbContext db)
        {
            this.db = db;
        }

        public void AddEntity(object car)
        {
            db.Add(car);
        }

        public IEnumerable<Car> GetAllCars()
        {
            return db.Cars.OrderBy(x => x.Type).ToList();
        }

        public Car GetCarById(string id)
        {
            return db.Cars.Where(x => x.Id == id).FirstOrDefault();
        }

        public void SaveAll()
        {
            db.SaveChanges();
        }
    }
}
