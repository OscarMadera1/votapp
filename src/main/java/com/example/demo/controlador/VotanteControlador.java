package com.example.demo.controlador;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entidades.Votante;
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

	@GetMapping("/votante")
	public String votante(Model model) {
		try {
			List<Votante> listaVotantes=votanteService.findAll();
			System.out.println("listaVotantes-->"+listaVotantes.toString());
			model.addAttribute("votante", listaVotantes);
		}catch (Exception e) {
			System.out.println("Error: "+e);
		}
		return "/indexVot";
	}
	@GetMapping("/nuevoVotante")
	public String addVotante(Model model) {
		model.addAttribute("votante", new Votante());
		return "/addVotante";
	}
	
	@PostMapping("/saveVotante")
	public String addVotante(@Validated Votante votante) {
		System.out.println("Votante-->"+votante.toString());
		votanteService.save(votante);
		return "redirect:/addVotante";
	}
	
	@GetMapping("/eliminarVotante/{codVotante}")
	public String Eliminar(@PathVariable int codVotante) {
		votanteService.deleteById(codVotante);
		return "redirect/indexVot";
	}
	
}
