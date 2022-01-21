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
import com.coforge.training.foodota.model.Restaurant;
import com.coforge.training.foodota.repository.RestaurantRepository;
import com.coforge.training.foodota.service.RestaurantService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/restaurant")
public class RestaurantRestController {
	
	@Autowired
	private RestaurantService rService;
	
	@Autowired
	private RestaurantRepository rRepo;
	
	@GetMapping("/restaurants")
	public List<Restaurant> getAllOrders(){
	return rService.listAll();
	}

	@PostMapping("/restaurants")
	public Restaurant saveRestaurant(@Validated @RequestBody Restaurant restaurant ) {
	return rService.save(restaurant);
	}

	@PutMapping("/restaurants/{id}")
	public ResponseEntity<Restaurant> updateRestaurant(@PathVariable(value="id") Long id,
	@Validated @RequestBody Restaurant restaurant)
	throws ResourceNotFoundException
	{
	Restaurant r=rRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException
	("Restaurant not found for this id :: " + id));
	r.setRestName(r.getRestName());
	r.setLocation(r.getLocation());
	final Restaurant updatedRestaurant=rRepo.save(r); //invokes save() method of jpa repository
	return ResponseEntity.ok().body(updatedRestaurant);
	}

	@DeleteMapping("/restaurants/{id}")
	public void deleteRestaurant(@PathVariable("id") int id) {
	rService.delete(id); //deletes record based on ID
	}

}
