package service.AdminService.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CarBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String car_brand;

    public CarBrand() {
    }

    public CarBrand(Long id, String car_brand) {
        this.id = id;
        this.car_brand = car_brand;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCar_brand() {
        return car_brand;
    }

    public void setCar_brand(String car_brand) {
        this.car_brand = car_brand;
    }
}
