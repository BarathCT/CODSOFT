package com.task3.atmInterface.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {

    private String Type;
    private double amount;
    private LocalDateTime timestamp;

}
