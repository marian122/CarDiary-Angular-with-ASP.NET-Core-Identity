using AutoMapper;
using CarDiaryServer.Models.Entities;
using CarDiaryServer.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDiaryServer.Mappings
{
    public class CarMappingProfile : Profile
    {
        public CarMappingProfile()
        {
            CreateMap<Car, CarViewModel>()
                .ForMember(c => c.CarId, ex => ex.MapFrom(x => x.Id)).ReverseMap();

        }
    }
}
