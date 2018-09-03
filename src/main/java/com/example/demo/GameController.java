package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameController {

    @Autowired
    private GameRepository repo;



    @PostMapping(value = "creategame", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Questions> createGame(@RequestBody Game game, HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        repo.createGame(game.getId());
        List<Questions> questions = new ArrayList<>();
        return questions = repo.getQuestions(game.getId());
    }


    @PostMapping(value = "/createplayers", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createPlayers(@RequestBody Player player, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");


    }


}
