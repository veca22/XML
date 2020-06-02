package service.AdminService.model;

import javax.persistence.*;

@Entity
public class TransmissionType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String serial_number;

    @Column
    private String transmission_type;

    public TransmissionType(Long id, String serial_number, String transmission_type) {
        this.id = id;
        this.serial_number = serial_number;
        this.transmission_type = transmission_type;
    }

    public TransmissionType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSerial_number() {
        return serial_number;
    }

    public void setSerial_number(String serial_number) {
        this.serial_number = serial_number;
    }

    public String getTransmissionType() {
        return transmission_type;
    }

    public void setTransmissionType(String fuelType) {
        this.transmission_type = fuelType;
    }
}
