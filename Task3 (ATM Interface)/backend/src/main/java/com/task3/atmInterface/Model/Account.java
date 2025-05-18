package com.task3.atmInterface.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {

    private String accountNumber;
    private String pin;
    private double balance;
    private List<Transaction> transactionHistory;

    public Account(String accountNumber, String pin, double balance) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = balance;
        this.transactionHistory = new ArrayList<>();
    }

    public boolean validatePin(String inputPin){
        return pin.equals(inputPin);
    }
}
