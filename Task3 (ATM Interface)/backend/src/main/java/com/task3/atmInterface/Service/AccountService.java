package com.task3.atmInterface.Service;

import com.task3.atmInterface.Model.Account;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AccountService {

    private final Map<String, Account> accounts = new HashMap<>();

    public AccountService() {
        Account account1 = new Account("123456789", "1234", 1000.00);
        accounts.put(account1.getAccountNumber(), account1);
    }

    public Account getAccount(String accountNumber) {
        return accounts.get(accountNumber);
    }
}
