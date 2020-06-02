package service.AdService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import service.AdService.model.CarBrand;
import service.AdService.model.CarModel;

import java.util.List;

public interface CarBrandRepo extends JpaRepository<CarBrand, Long> {

    List<CarBrand> findAll();

    CarBrand findCarBrandByBrand(String brand);

    CarBrand findCarBrandByCarModel(CarModel carModel);

}
