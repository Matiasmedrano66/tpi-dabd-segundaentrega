package com.tpiblackjack.tpiblackjack.controllers;

import com.tpiblackjack.tpiblackjack.models.Carta;
import com.tpiblackjack.tpiblackjack.services.ICartaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/cartas")
public class CartaController {

    @Autowired
    private ICartaService _cartaService;

    @GetMapping(path = "/{id}")
    public Carta findCartaById(@PathVariable("id") Long id)
    {
        return _cartaService.findCartaById(id);
    }
}
