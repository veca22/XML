package service.AdService.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import service.AdService.Service.AdService;
import service.AdService.model.Ad;

import java.util.List;

public interface AdRepo extends JpaRepository<Ad,Long> {

    //Ad findById(Long id);
    List<Ad> findAll();
}
