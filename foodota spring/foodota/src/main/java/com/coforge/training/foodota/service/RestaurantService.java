package com.coforge.training.foodota.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Restaurant;
import com.coforge.training.foodota.repository.RestaurantRepository;

@Service
@Transactional
public class RestaurantService {

	@Autowired
	private RestaurantRepository rRepo;

	public List<Restaurant> listAll() {
	return rRepo.findAll(); // defined in JPA repo
	}


	public Restaurant save(Restaurant restaurant) {

	return rRepo.save(restaurant);
	}

	public Restaurant findById(long id) {

	return rRepo.findById(id).get(); // defined in JPA repo
	}

	public void delete(long id) {
	rRepo.deleteById(id); // defined in JPA repo
	}
}
