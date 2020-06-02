package service.AdService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import service.AdService.model.CarBrand;

public interface CarBrandRepo extends JpaRepository<CarBrand, Long> {

    CarBrand findCarBrandById(Long id);
    CarBrand findCarBrandByBrand(String brand);
}
