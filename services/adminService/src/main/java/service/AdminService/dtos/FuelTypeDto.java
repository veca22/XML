package service.AdminService.dtos;

public class FuelTypeDto {
    private String serialNumber;
    private String type;

    public FuelTypeDto(String type, String serialNumber) {
        this.type = type;
        this.serialNumber = serialNumber;
    }

    public FuelTypeDto() {
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getFuelType() {
        return type;
    }

    public void setFuelType(String type) {
        this.type = type;
    }
}
