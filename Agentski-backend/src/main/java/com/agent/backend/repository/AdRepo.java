package com.agent.backend.repository;

import com.agent.backend.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface AdRepo extends JpaRepository<Ad, Long> {
    List<Ad> findAll();
    List<Ad> findAllByClientId(Long id);
    Ad findAdById(Long id);
}
