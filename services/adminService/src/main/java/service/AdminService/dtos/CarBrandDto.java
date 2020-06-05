package service.AdminService.dtos;

public class CarBrandDto {
    private String brand;

    public CarBrandDto() {}

    public CarBrandDto(String brand) {
        this.brand = brand;
    }

    public String getCarBrand() {
        return brand;
    }

    public void setCarBrand(String brand) {
        this.brand = brand;
    }
}
