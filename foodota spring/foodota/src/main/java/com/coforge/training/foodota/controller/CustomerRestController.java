package com.coforge.training.foodota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.service.CustomerService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/customer")
public class CustomerRestController {
	
	@Autowired
	private CustomerService cService;
	
	@GetMapping("/customers")
	public List<Customer> getAllOrders(){
	return cService.listAll();
	}
	
	
	@GetMapping("/customers/{id}")
	public Customer getOrderById(@PathVariable(value="id") Long id){
	
		return cService.findById(id);
	}
	
	@PostMapping("/customers")
	public Customer saveProduct(@Validated @RequestBody Customer customer) {
		
		
		return cService.save(customer);
		
	}
	
//	@PutMapping("/customers/{id}")
//	public ResponseEntity<Customer> updateCustomer(@PathVariable(value="id") Long id,@Validated @RequestBody Customer customer)
//	{
//		Customer c =cService.findById(id);
//		
//		
//		c.setCity(c.getCity());
//		c.setPincode(c.getPincode());
//		c.setLandmark(c.getLandmark());
//		
//		final Customer updatedCustomer=cService.save(c); ////Invokes Save() Method of JPA Repository
//		return ResponseEntity.ok().body(updatedCustomer);
//		
//	}
	@PutMapping("/customers/{id}")
	public Customer updateProducts(@RequestBody Customer customer, @PathVariable Long id) {
		return cService.save(customer);
		
	}
	
	@DeleteMapping("/customers/{id}")
	public void deleteCustomer(@PathVariable("id") Long id) {

	cService.delete(id); //deletes record based on ID
	}

}
