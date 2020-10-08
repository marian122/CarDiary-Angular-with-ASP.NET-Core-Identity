using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace CarDiaryServer.Models.Entities
{
    public class Car
    {
        [Key]
        public string Id { get; set; }

        public string Type { get; set; }

        public string Model { get; set; }

        public string Year { get; set; }

        public string Engine { get; set; }

        public StoreUser User { get; set; }
        


    }
}
