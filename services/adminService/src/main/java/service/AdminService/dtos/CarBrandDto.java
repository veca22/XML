package service.AdminService.dtos;

public class CarBrandDto {
    private String car_brand;

    public CarBrandDto() {}

    public CarBrandDto(String car_brand) {
        this.car_brand = car_brand;
    }

    public String getCar_brand() {
        return car_brand;
    }

    public void setCar_brand(String car_brand) {
        this.car_brand = car_brand;
    }
}
