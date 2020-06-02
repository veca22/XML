package service.AdService.Service;

import org.springframework.stereotype.Service;
import service.AdService.model.Car;
import service.AdService.repository.CarRepo;

@Service
public class CarService {

    CarRepo carRepo;

    public void addCar(Car car){
        carRepo.save(car);
    }

    public Car findCar(Long id){
        return carRepo.findCarById(id);
    }
}
