package project.Gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class GatewayApplication {

	@RequestMapping("/health")
	public String home() {
		return "Hello from gateway";
	}

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	//dodajem komentar
}
