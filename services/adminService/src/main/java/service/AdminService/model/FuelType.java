package service.AdminService.model;

import javax.persistence.*;

@Entity
public class FuelType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String serial_number;

    @Column
    private String fuelType;

    public FuelType() {
    }

    public FuelType(Long id, String serial_number, String fuelType) {
        this.id = id;
        this.serial_number = serial_number;
        this.fuelType = fuelType;
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

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
}
