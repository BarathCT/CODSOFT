package com.task1.numberGuess.Controller;

import com.task1.numberGuess.Model.GameState;
import com.task1.numberGuess.Service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "http://localhost:5173")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {{
        this.gameService = gameService;}
    }

    @GetMapping("/start")
    public GameState startGame(){
        return gameService.startNewGame();
    }

    @PostMapping("/guess")
    public GameState makeGuess(@RequestParam int guess){
        return gameService.makeGuess(guess);
    }

    @GetMapping("/status")
    public GameState getGameStatus(){
        return gameService.getCurrentGame();
    }
}
