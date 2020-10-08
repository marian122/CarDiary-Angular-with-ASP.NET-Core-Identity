using CarDiaryServer.Models.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDiaryServer.Models
{
    public class DiarySeeder
    {
        private readonly CarDbContext db;
         
        public DiarySeeder(CarDbContext db)
        {
            this.db = db;
        }
        
        public async Task SeedAsync()
        {
            db.Database.EnsureCreated();

            //StoreUser user = await userManager.FindByEmailAsync("test@testov.bg");

            //if (user == null)
            //{
            //    user = new StoreUser()
            //    {
            //        FirstName = "test",
            //        LastName = "testov",
            //        Email = "test@testov.bg",
            //        UserName = "test@testov.bg"
            //    };

            //    var result = await userManager.CreateAsync(user, "P@ssw0rd!");

            //    if (result != IdentityResult.Success)
            //    {
            //        new InvalidOperationException("Could not create new user in seeder.");
            //    }
            //}

            if (!db.Cars.Any())
            {

                db.Cars.Add(new Car()
                {
                    Id = "7",
                    Type = "Golf",
                    Model = "Mk5",
                    Year = "2003",
                    Engine = "1.9"
                });

                db.Cars.Add(new Car()
                {
                    Id = "8",
                    Type = "bmw",
                    Model = "5",
                    Year = "2013",
                    Engine = "3.3"
                });

                db.Cars.Add(new Car()
                {
                    Id = "9",
                    Type = "audi",
                    Model = "a4",
                    Year = "2003",
                    Engine = "1.9"
                });

                db.SaveChanges();
            }
        }
    }
}
