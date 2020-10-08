using CarDiaryServer.Models.Entities;
using System.Collections.Generic;

namespace CarDiaryServer.Models
{
    public interface ICarRepository
    {
        IEnumerable<Car> GetAllCars();
        Car GetCarById(string id);
        void AddEntity(object car);
        void SaveAll();
    }
}