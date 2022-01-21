package com.coforge.training.foodota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.Contactus;

@Repository
public interface ContactRepository extends JpaRepository<Contactus, Long>{

}
