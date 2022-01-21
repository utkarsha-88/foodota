package com.coforge.training.foodota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.model.Payment;
import com.coforge.training.foodota.repository.CustomerRepository;
import com.coforge.training.foodota.repository.PaymentRepository;
import com.coforge.training.foodota.service.PaymentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/payment")
public class PaymentRestController {

	@Autowired
	private PaymentRepository pRepo;
	
	@Autowired
	private CustomerRepository cRepo;
	
	@Autowired
	private PaymentService pService;

	@GetMapping("/payments")
	public List<Payment> getAllOrders(){
	return pService.listAll();
	}
	
	@PostMapping("/save")
	public Payment saveProduct(@Validated @RequestBody Payment payment)
	{
	return pRepo.save(payment);
	}
	
	@PostMapping("/paymentorder/{id}/{amount}")
	public Payment placeOrder(@PathVariable(value = "id") Long id ,@PathVariable(value = "amount") String amount, @RequestBody Payment payment) throws Exception {
//	return cRepo.save(myorder.getCustomer());
		return cRepo.findById(id).map(customer->{
			payment.setCustomer(customer);
			payment.setAmount(amount);
			return pRepo.save(payment);
		
		}).orElseThrow(()-> new Exception("not found"));
	}
}
