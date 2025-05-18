package com.task3.atmInterface.Service;

import com.task3.atmInterface.Model.Account;
import com.task3.atmInterface.Model.AtmResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtmService {

    @Autowired
    private AccountService accountService;

    public AtmResponse withdraw(String accountNumber, double amount) {
        Account account = accountService.getAccount(accountNumber);

        if(account == null){
            return new AtmResponse(false, "Account Not Found", 0);
        }
        if(account.getBalance() < amount){
            return new AtmResponse(false, "Insufficient Balance", account.getBalance());
        }
        account.setBalance(account.getBalance() - amount);
        return new AtmResponse(true, "Withdrawal Successful", account.getBalance());
    }

    public AtmResponse deposit(String accountNumber, double amount) {
        Account account = accountService.getAccount(accountNumber);

        if(account == null){
            return new AtmResponse(false, "Account Not Found", 0);
        }
        account.setBalance(account.getBalance() + amount);
        return new AtmResponse(true, "Deposit Successful", account.getBalance());
    }

    public AtmResponse checkBalance(String accountNumber) {
        Account account = accountService.getAccount(accountNumber);
        if (account == null) {
            return new AtmResponse(false, "Account not found", 0);
        }
        return new AtmResponse(true, "Balance checked", account.getBalance());
    }

    public boolean validatePin(String accountNumber, String pin) {
        Account account = accountService.getAccount(accountNumber);
        return account != null && account.validatePin(pin);
    }
}
