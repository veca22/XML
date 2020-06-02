package service.AdminService.dtos;

public class CarTypeDto {

    private String car_type;

    public CarTypeDto() {}

    public CarTypeDto(String car_type) {
        this.car_type = car_type;
    }

    public String getCar_type() {
        return car_type;
    }

    public void setCar_type(String car_type) {
        this.car_type = car_type;
    }
}
