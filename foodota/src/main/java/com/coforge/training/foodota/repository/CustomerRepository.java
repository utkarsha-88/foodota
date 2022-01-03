package com.coforge.training.foodota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
