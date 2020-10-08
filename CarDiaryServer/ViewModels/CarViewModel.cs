using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarDiaryServer.ViewModels
{
    public class CarViewModel
    {
        public string CarId { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string Model { get; set; }

        public string Year { get; set; }

        public string Engine { get; set; }
    }
}
