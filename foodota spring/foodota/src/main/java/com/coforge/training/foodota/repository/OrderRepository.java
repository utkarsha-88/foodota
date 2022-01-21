package com.coforge.training.foodota.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.MyOrder;

@Repository
public interface OrderRepository extends JpaRepository<MyOrder, Long> {

	List<MyOrder> findByCustomerId(Long id);
}
