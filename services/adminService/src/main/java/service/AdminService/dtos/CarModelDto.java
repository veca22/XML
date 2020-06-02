package service.AdminService.dtos;

public class CarModelDto {
    private String car_model;

    public CarModelDto() {}

    public CarModelDto(String car_model) {
        this.car_model = car_model;
    }

    public String getCar_model() {
        return car_model;
    }

    public void setCar_model(String car_model) {
        this.car_model = car_model;
    }
}
