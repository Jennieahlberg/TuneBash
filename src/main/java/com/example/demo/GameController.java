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

//    @PostMapping(value = "creategame", consumes = MediaType.APPLICATION_JSON_VALUE)
//    public List<Questions> createGame(@RequestBody List<Player> players, Game game, HttpServletResponse response) {
//        response.setHeader("Access-Control-Allow-Origin", "*");
//        List<Player> listOfPlayers = new ArrayList<>();
//        repo.createGame(game.getId());
//        for (var p:players) {
//            Player player = new Player();
//            listOfPlayers.add(player);
//        }
//        repo.save(listOfPlayers);
//        return ;
//    }
//
//    @PostMapping(value = "/createplayers", consumes = MediaType.APPLICATION_JSON_VALUE)
//    public void createPlayers(@RequestBody Player player, HttpServletResponse response) {
//        response.setHeader("Access-Control-Allow-Origin", "*");
//
//    }
}
