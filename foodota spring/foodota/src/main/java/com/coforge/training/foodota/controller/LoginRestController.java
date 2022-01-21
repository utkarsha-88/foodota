package com.coforge.training.foodota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.exception.ResourceNotFoundException;
import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LoginRestController {
	
	@Autowired
	private UserRepository uRepo;
	
	
	@PostMapping("/customer")
	public Customer loginDealer(@Validated @RequestBody Customer customer) throws ResourceNotFoundException {

//	Boolean a=false;

	String email=customer.getEmail();
	String password=customer.getPassword();

	Customer c=uRepo.findItByEmail(email).orElseThrow(()->new ResourceNotFoundException("User doesn't exist" +email));

	if(email.equals(c.getEmail()) && password.equals(c.getPassword())) {
		
		return c;
	
	}
	return c;
	}

}
