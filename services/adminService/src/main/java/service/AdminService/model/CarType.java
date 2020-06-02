package service.AdminService.model;

import javax.persistence.*;

@Entity
public class CarType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String car_type;

    public CarType() {
    }

    public CarType(Long id, String car_type) {
        this.id = id;
        this.car_type = car_type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCar_type() {
        return car_type;
    }

    public void setCar_type(String car_type) {
        this.car_type = car_type;
    }
}
