package com.coforge.training.foodota.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.Customer;


@Repository
public interface UserRepository extends CrudRepository<Customer, Long> {
	
	public Customer findByEmail(String email);
	
	public Optional<Customer> findItByEmail(String email);

}
