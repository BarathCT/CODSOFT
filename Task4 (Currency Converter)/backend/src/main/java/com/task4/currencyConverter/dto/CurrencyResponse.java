package com.task4.currencyConverter.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CurrencyResponse {

    private String from;
    private String to;
    private double rate;

}
