package com.coforge.training.foodota.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.repository.CustomerRepository;


@Service
@Transactional
public class CustomerService {
	
	@Autowired
	private CustomerRepository cRepo;
	
	
	public Customer save(Customer customer) {
		
		return cRepo.save(customer);
	}
	
	public Customer findById(long id) {
		return cRepo.findById(id).get(); 
		}
	
	public List<Customer> listAll() {
		return cRepo.findAll(); 
		}

	public void delete(long id) {
		cRepo.deleteById(id); // defined in JPA repo
		}
}
