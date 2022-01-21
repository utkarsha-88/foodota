package com.coforge.training.foodota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.model.Admin;
import com.coforge.training.foodota.repository.AdminRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class AdminRestController {
	
	@Autowired
	private AdminRepository aRepo;

	@PostMapping("/admin")
	public Boolean loginAdmin(@Validated @RequestBody Admin admin) {

	Boolean a=false;

	String username=admin.getUsername();
	String password=admin.getPassword();

	Admin a1=aRepo.findByUsername("admin");
	Admin a2=aRepo.findByPassword("admin");

	if(username.equals(a1.getUsername()) && password.equals(a2.getPassword())) {
	
		a=true;
	
	}
	return a;
	}

}
