package com.coforge.training.foodota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import com.coforge.training.foodota.exception.ResourceNotFoundException;
import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.model.MyOrder;
import com.coforge.training.foodota.repository.CustomerRepository;
import com.coforge.training.foodota.repository.OrderRepository;
import com.coforge.training.foodota.service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/place")
public class OrderController {

	@Autowired
	private OrderService oService;

	@Autowired
	private OrderRepository oRepo;
	
	@Autowired
	private CustomerRepository cRepo;

	@GetMapping("/orders")
	public List<MyOrder> getAllOrders(){



	return oService.listAll();
	
	}
	
	@GetMapping("/getordersbyid/{id}")
	public List<MyOrder> getProductById(@PathVariable(value="id") Long id) throws ResourceNotFoundException
	{
//	MyOrder p=oRepo.findByCustomerId(id).orElseThrow(() -> new ResourceNotFoundException("order not found for this id :: " + id));
	return oRepo.findByCustomerId(id);
	}

	//@RequestBody annotation automatically deserialize JSON into java type

	@PostMapping("/orders")
	public MyOrder saveOrder(@Validated @RequestBody MyOrder myOrder ) {

	return oService.save(myOrder);
	}


	@PutMapping("/order/{id}")
	public ResponseEntity<MyOrder> updateProduct(@PathVariable(value="id") Long id,
	@Validated @RequestBody MyOrder order)
	throws ResourceNotFoundException
	{
	MyOrder o=oRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
	("Product not found for this id :: " + id));


	o.setOrderName(o.getOrderName());
	o.setOrderPrice(o.getOrderPrice());
	o.setTotal(o.getOrderPrice()*o.getQty());
	
	final MyOrder updatedProduct=oRepo.save(o); //invokes save() method of jpa repository
	return ResponseEntity.ok().body(updatedProduct);
	}

	@DeleteMapping("/orders/{id}")
	public void deleteProduct(@PathVariable("id") int id) {

	oService.delete(id); //deletes record based on ID
	}

	@PostMapping("/placeorder/{id}")
	public MyOrder placeOrder(@PathVariable(value = "id") Long id, @RequestBody MyOrder myorder) throws Exception {
//	return cRepo.save(myorder.getCustomer());
		
		return cRepo.findById(id).map(customer->{
			
			myorder.setCustomer(customer);
			myorder.setTotal(myorder.getOrderPrice()*myorder.getQty());
//			oService.save(myorder);
			return oRepo.save(myorder);
		
		}).orElseThrow(()-> new Exception("not found"));
	}

	@GetMapping("/findAllOrders")
	public List<Customer> findAllOrders(){
	return cRepo.findAll();
	}
}
