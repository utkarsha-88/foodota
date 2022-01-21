package com.coforge.training.foodota.model;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@PrimaryKeyJoinColumn
	private Long id;
	
	@Column(unique = true)
	private String email;
	
	@Column(name="full_name",nullable = false)
	private String fullName;
	
	@Column(name="password")
	private String password;
	
	@Column(name="phone_no")
	private String phoneNo;
	
	@Column(name="city")
	private String city;
	
	@Column(name="pincode")
	private String pincode;
	
	@Column(name="landmark")
	private String landmark;

	@OneToMany(targetEntity = MyOrder.class,cascade = CascadeType.ALL)
	@JsonIgnore
	private List<MyOrder> myorder;
	
	
	
	
	public List<MyOrder> getMyorder() {
		return myorder;
	}

	public void setMyorder(List<MyOrder> myorder) {
		this.myorder = myorder;
	}

	@OneToOne(targetEntity = Payment.class,cascade = CascadeType.ALL)
	@JsonIgnore
	private Payment payment;
	

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	
	public Customer() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		
		Base64.Encoder encoder = Base64.getEncoder(); // encrypt password in database field
		String normalString = password;
		String encodedString = encoder.encodeToString(
		normalString.getBytes(StandardCharsets.UTF_8) );
		this.password = encodedString;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

}
