package com.coforge.training.foodota.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.repository.CustomerRepository;
import com.coforge.training.foodota.repository.UserRepository;

@Service
@Transactional
public class LoginService {
	
	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	private CustomerRepository cRepo;
	
	public Customer findByEmail(String email)
	{
	return uRepo.findByEmail(email);
	}

	public void saveDealer(Customer customer) 
	{
		cRepo.save(customer); // invokes save() method of jpa repository
	}



}
