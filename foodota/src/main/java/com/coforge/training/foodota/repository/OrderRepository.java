package com.coforge.training.foodota.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.coforge.training.foodota.model.MyOrder;

@Repository
public interface OrderRepository extends JpaRepository<MyOrder, Long>{
	
//	public Double calculate(Long qty,Double price);
	

}
