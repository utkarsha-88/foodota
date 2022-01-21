package com.coforge.training.foodota.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Contactus;
import com.coforge.training.foodota.repository.ContactRepository;

@Service
@Transactional
public class ContactusService {
	
	@Autowired
	private ContactRepository cuRepo;

	public Contactus save(Contactus contactus) { // save is userdefined
	return cuRepo.save(contactus); // save method defined in JPA repo
	}

}
