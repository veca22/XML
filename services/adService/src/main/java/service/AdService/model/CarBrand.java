package service.AdService.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CarBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String brand;

    @JsonIgnore
    @OneToMany(mappedBy = "carBrand")
    private Set<Car> cars;

    @JsonIgnore
    @OneToMany(mappedBy = "carBrand")
    private Set<CarModel> carModel;

    public CarBrand() {
    }

    public CarBrand(Long id, String brand, Set<Car> cars, Set<CarModel> carModel) {
        this.id = id;
        this.brand = brand;
        this.cars = cars;
        this.carModel = carModel;
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
