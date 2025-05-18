package com.task3.atmInterface.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AtmResponse {

    private boolean success;
    private String message;
    private double newBalance;
}
