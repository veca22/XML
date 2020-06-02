package service.AdminService.dtos;

public class TransmissionTypeDto {
    private String serial_number;
    private String transmission_type;

    public TransmissionTypeDto() {
    }

    public TransmissionTypeDto(String serial_number, String transmission_type) {
        this.serial_number = serial_number;
        this.transmission_type = transmission_type;
    }

    public String getSerial_number() {
        return serial_number;
    }

    public void setSerial_number(String serial_number) {
        this.serial_number = serial_number;
    }

    public String getTransmission_type() {
        return transmission_type;
    }

    public void setTransmission_type(String transmission_type) {
        this.transmission_type = transmission_type;
    }
}
