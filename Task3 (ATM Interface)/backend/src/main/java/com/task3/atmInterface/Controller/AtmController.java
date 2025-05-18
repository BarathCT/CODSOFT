package com.task3.atmInterface.Controller;

import com.task3.atmInterface.Model.AtmResponse;
import com.task3.atmInterface.Service.AtmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/atm")
@CrossOrigin(origins = "http://localhost:5173")
public class AtmController {

    @Autowired
    private AtmService atmService;

    @PostMapping("/withdraw")
    public AtmResponse withdraw(@RequestParam String accountNumber, @RequestParam double amount) {
        return atmService.withdraw(accountNumber, amount);
    }

    @PostMapping("/deposit")
    public AtmResponse deposit(@RequestParam String accountNumber, @RequestParam double amount) {
        return atmService.deposit(accountNumber, amount);
    }

    @GetMapping("/balance")
    public AtmResponse balance(@RequestParam String accountNumber){
        return atmService.checkBalance(accountNumber);
    }

    @PostMapping("/validate")
    public boolean validatePin(@RequestParam String accountNumber, @RequestParam String pin) {
        return atmService.validatePin(accountNumber, pin);
    }
}
