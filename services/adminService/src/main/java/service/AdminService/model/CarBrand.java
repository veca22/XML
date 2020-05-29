package service.AdminService.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CarBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String brand;

    @OneToMany(mappedBy = "carBrand")
    private Set<Car> cars;

    @OneToMany(mappedBy = "carBrand")
    private Set<CarModel> carModel;

    public CarBrand() {
    }

    public CarBrand(String brand, Set<Car> cars, Set<CarModel> carModel) {
        this.brand = brand;
        this.cars = cars;
        this.carModel = carModel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Set<Car> getCars() {
        return cars;
    }

    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }

    public Set<CarModel> getCarModel() {
        return carModel;
    }

    public void setCarModel(Set<CarModel> carModel) {
        this.carModel = carModel;
    }
}
