package com.task4.currencyConverter.controller;

import com.task4.currencyConverter.dto.CurrencyResponse;
import com.task4.currencyConverter.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @GetMapping("/convert")
    public ResponseEntity<CurrencyResponse> convert(@RequestParam String from, @RequestParam String to) {
        CurrencyResponse response = currencyService.getExchangeRate(from, to);
        return ResponseEntity.ok(response);
    }
}
