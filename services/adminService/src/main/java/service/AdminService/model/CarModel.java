package service.AdminService.model;

import javax.persistence.*;

@Entity
public class CarModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String model;

    @ManyToOne
    @JoinColumn(name = "car_brand_id", nullable = false)
    private CarBrand carBrand;

    public CarModel() {
    }

    public CarModel(String model, CarBrand carBrand) {
        this.model = model;
        this.carBrand = carBrand;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public CarBrand getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(CarBrand carBrand) {
        this.carBrand = carBrand;
    }
}
