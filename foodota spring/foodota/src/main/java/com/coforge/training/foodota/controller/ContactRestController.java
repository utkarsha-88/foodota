package com.coforge.training.foodota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.model.Contactus;

import com.coforge.training.foodota.service.ContactusService;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/contact")
public class ContactRestController {

	@Autowired
	private ContactusService cuService;


	@PostMapping("/contactus")
	public Contactus placeOrder(@Validated @RequestBody Contactus contact) {
	return cuService.save(contact);
	
	}
	
}
