package com.coforge.training.foodota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

	public Admin findByUsername(String username);

	public Admin findByPassword(String password);
	
}
