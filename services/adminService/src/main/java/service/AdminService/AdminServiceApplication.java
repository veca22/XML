package service.AdminService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AdminServiceApplication {

	@RequestMapping("/health")
	public String home() {
		return "Hello from admin service!";
	}

	public static void main(String[] args) {
		SpringApplication.run(AdminServiceApplication.class, args);
	}

}
