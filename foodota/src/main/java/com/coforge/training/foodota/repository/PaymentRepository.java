package com.coforge.training.foodota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coforge.training.foodota.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
