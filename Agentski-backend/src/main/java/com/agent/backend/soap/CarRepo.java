package com.agent.backend.soap;

import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Component
public class CarRepo {

    private static final Map<String, Car> cars = new HashMap<>();

    @PostConstruct
    public void initData(){
        Car c1 = new Car();
        c1.setName("Audi");
        c1.setModel("A5");
        c1.setType(Type.SPORT);

        cars.put(c1.getName(), c1);

        Car c2 = new Car();
        c2.setName("BMW");
        c2.setModel("X5");
        c2.setType(Type.SUV);

        cars.put(c2.getName(), c2);

        Car c3 = new Car();
        c3.setName("Citroen");
        c3.setModel("C7");
        c3.setType(Type.MINI_VAN);

        cars.put(c3.getName(), c3);
    }

    public Car findCar(String name) {
        Assert.notNull(name, "The car's name must not be null");
        return cars.get(name);
    }
}
