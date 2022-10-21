package com.example.demo.controlador;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.servicios.VotanteService;

@Controller
public class VotanteControlador {
	
	@Autowired
	private VotanteService votanteService;
	
	@GetMapping("/votapp")
	public String despVotapp() {
		return "/Index";
	}
	
	/* link a candidatos */
	
	@GetMapping("/petro")
	public String petro() {
		return "/PetroCSS";
	}
	
	@GetMapping("/hernandez")
	public String rodolfo() {
		return "/Hernandez";
		
	}

	
	@GetMapping("/federico")
	public String federico() {
		return "/Federico";
	}
	
	@GetMapping("/fajardo")
	public String fajardo() {
		return "/fajardo";
	}
}
