package service.AdService.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdService.model.Ad;
import service.AdService.model.Car;
import service.AdService.model.CarBrand;
import service.AdService.model.CarModel;
import service.AdService.repository.CarBrandRepo;

import java.util.List;


@Service
public class CarBrandService {

       @Autowired
    CarBrandRepo carBrandRepo;

   public void addCarBrand(CarBrand carBrand){
       carBrandRepo.save(carBrand);
   }

   public CarBrand findOneCarBrand(String brand){
       return carBrandRepo.findCarBrandByBrand(brand);
   }

    public CarBrand findCarByModel(CarModel carModel){
        return carBrandRepo.findCarBrandByCarModel(carModel);
    }
}
