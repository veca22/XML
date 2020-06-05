package service.rentingService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import service.rentingService.model.RentRequest;

public interface RentRequestRepo extends JpaRepository<RentRequest, Long> {
}
