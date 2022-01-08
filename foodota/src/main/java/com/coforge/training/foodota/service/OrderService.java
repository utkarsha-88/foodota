package com.coforge.training.foodota.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.training.foodota.model.MyOrder;
import com.coforge.training.foodota.repository.OrderRepository;

@Service
@Transactional
public class OrderService {
	
	@Autowired
	private OrderRepository oRepo;
	
	public List<MyOrder> listAll() {
		return oRepo.findAll(); // defined in JPA repo
		}

		public MyOrder save(MyOrder order) { // save is userdefined
		return oRepo.save(order); // save method defined in JPA repo
		}


		public MyOrder get(long id) {
		return oRepo.findById(id).get(); // defined in JPA repo
		}

		public void delete(long id) {
		oRepo.deleteById(id); // defined in JPA repo
		}
		
//		public Double  calculate(Long qty,Double price) {
//			
//			return qty*price;
//					
//		}

}
