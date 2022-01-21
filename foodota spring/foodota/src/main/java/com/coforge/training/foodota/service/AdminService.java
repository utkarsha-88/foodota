package com.coforge.training.foodota.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.Admin;
import com.coforge.training.foodota.repository.AdminRepository;

@Service
@Transactional
public class AdminService {

	@Autowired
	private AdminRepository aRepo;

	public Admin findByUsername(String username)
	{
	return aRepo.findByUsername(username);
	}

	public Admin findByPassword(String password)
	{
	return aRepo.findByPassword(password);
	}
}
