package com.task4.currencyConverter.service;

import com.task4.currencyConverter.dto.CurrencyResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.Map;

@Service
public class CurrencyService {
    public CurrencyResponse getExchangeRate(String from, String to) {
        RestTemplate restTemplate = new RestTemplate();

        String url = String.format("https://api.frankfurter.app/latest?from=%s&to=%s", from, to);
        Map<String, Object> apiResponse = restTemplate.getForObject(url, Map.class);

        CurrencyResponse response = new CurrencyResponse();
        response.setFrom(from);
        response.setTo(to);

        Map<String, Double> rates = (Map<String, Double>) apiResponse.get("rates");
        response.setRate(rates.get(to));

        return response;
    }
}
