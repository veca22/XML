package service.rentingService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class RentingServiceApplication {

	@RequestMapping("/health")
	public String sayHello(){
		return "Hello from renting service!";
	}

	public static void main(String[] args) {
		SpringApplication.run(RentingServiceApplication.class, args);
	}



}
