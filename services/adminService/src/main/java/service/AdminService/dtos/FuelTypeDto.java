package service.AdminService.dtos;

public class FuelTypeDto {
    private String serial_number;
    private String fuel_type;

    public FuelTypeDto(String serial_number, String fuel_type) {
        this.serial_number = serial_number;
        this.fuel_type = fuel_type;
    }

    public FuelTypeDto() {
    }

    public String getSerial_number() {
        return serial_number;
    }

    public void setSerial_number(String serial_number) {
        this.serial_number = serial_number;
    }

    public String getFuel_type() {
        return fuel_type;
    }

    public void setFuel_type(String fuel_type) {
        this.fuel_type = fuel_type;
    }
}
