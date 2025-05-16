package com.task1.numberGuess.Service;

import com.task1.numberGuess.Model.GameState;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class GameService {

    private static final int MAX_ATTEMPTS = 10;
    private static final int MIN_RANGE = 1;
    private static final int MAX_RANGE = 100;

    private GameState currentGame;
    private Random random = new Random();

    public GameState startNewGame() {
        int targetNumber = random.nextInt(MAX_RANGE - MIN_RANGE + 1) + MIN_RANGE;
        currentGame = new GameState(targetNumber, MAX_ATTEMPTS, 0, false, "Guess a number between 1 and 100");
        return currentGame;
    }

    public GameState makeGuess(int guess) {

        if(currentGame == null || currentGame.isGameOver()){
            return startNewGame();
        }

        currentGame.setAttemptsLeft(currentGame.getAttemptsLeft() - 1);

        if(guess == currentGame.getTargetNumber()){
            currentGame.setScore(currentGame.getScore() + (currentGame.getAttemptsLeft() + 1) * 10);
            currentGame.setGameOver(true);
            currentGame.setMessage("Congratulations, You Guessed the Number.");
        }else if(currentGame.getAttemptsLeft() <= 0){
            currentGame.setGameOver(true);
            currentGame.setMessage(String.format("Game Over, The Number was %d.", currentGame.getTargetNumber()));
        }else if(guess < currentGame.getTargetNumber()){
            currentGame.setMessage("Too low, Try a higher number.");
        }else{
            currentGame.setMessage("Too high, Try a lower number.");
        }

        return currentGame;
    }

    public GameState getCurrentGame(){
        if(currentGame == null){
            return startNewGame();
        }
        return currentGame;
    }
}
