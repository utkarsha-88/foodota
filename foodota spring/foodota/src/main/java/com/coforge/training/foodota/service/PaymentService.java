package com.coforge.training.foodota.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Customer;
import com.coforge.training.foodota.model.Payment;
import com.coforge.training.foodota.repository.PaymentRepository;

@Service
@Transactional
public class PaymentService {

	private PaymentRepository pRepo;

	public void save(Payment payment) { // save is userdefined
	pRepo.save(payment); // save method defined in JPA repo
	}
	
	public List<Payment> listAll() {
		return pRepo.findAll(); // defined in JPA repo
		}
}
