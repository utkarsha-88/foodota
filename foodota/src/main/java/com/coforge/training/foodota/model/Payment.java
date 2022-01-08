package com.coforge.training.foodota.model;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long payId;
	private Long cardNumber;
	private String cardName;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date expires;
	private String cvv;
	
	public Payment() {
		// TODO Auto-generated constructor stub
	}
	
	public Long getPayId() {
		return payId;
	}



	public void setPayId(Long payId) {
		this.payId = payId;
	}



	public Long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(Long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public Date getExpires() {
		return expires;
	}

	public void setExpires(Date expires) {
		this.expires = expires;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		
		Base64.Encoder encoder = Base64.getEncoder(); // encrypt password in database field
		String normalString = cvv;
		String encodedString = encoder.encodeToString(
		normalString.getBytes(StandardCharsets.UTF_8) );
		this.cvv = encodedString;
	}

	
	
	
	

}
