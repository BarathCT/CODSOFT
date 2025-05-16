package com.task1.numberGuess.Model;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GameState {

    private int targetNumber;
    private int attemptsLeft;
    private int score;
    private boolean gameOver;
    private String message;
}
