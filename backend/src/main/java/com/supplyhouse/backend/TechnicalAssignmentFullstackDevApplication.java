package com.supplyhouse.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

@SpringBootApplication
public class TechnicalAssignmentFullstackDevApplication {

	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone("America/New_York"));    //Set the default time zone to ET
		SpringApplication.run(TechnicalAssignmentFullstackDevApplication.class, args);
	}

}
