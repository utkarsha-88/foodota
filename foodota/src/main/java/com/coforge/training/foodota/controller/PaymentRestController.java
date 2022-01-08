package com.coforge.training.foodota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.model.Payment;
import com.coforge.training.foodota.repository.PaymentRepository;

@RestController
@RequestMapping("/payment")
public class PaymentRestController {
	
	@Autowired
	private PaymentRepository pRepo;
	
	@PostMapping("/save")
	public Payment saveProduct(@Validated @RequestBody Payment payment)
	{
		return pRepo.save(payment);
	}

}
