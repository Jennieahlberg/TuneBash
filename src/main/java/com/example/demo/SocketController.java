package com.example.demo;

import org.jboss.logging.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import java.util.List;
import java.util.Random;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SocketController {

@Autowired
private PlayerRepository prepo;
@Autowired
private QuestionsRepository qrepo;

    //Controller för att visa deltagare/spel
//    @MessageMapping (value = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
//    @SendTo("/http://localhost:3000/")
//    public String newPlayer(@RequestBody Player player, HttpServletResponse response) throws Exception{
//        response.setHeader("Access-Control-Allow-Origin", "*");
//        prepo.save(player);
//        return player.getName();
    }

//    @MessageMapping("/questions")
//    @SendTo("/)")
//    public Questions getquestion()throws Exception{
//        Random random = new Random();
//        int rand =random.nextInt((100)+1);
//        return qrepo.findById(rand);
//
//    }


    //Controller för resultat
    @MessageMapping("/")
    @SendTo("/")// Filtrera så endast spelare i spelet får se
    public List<Player> results() throws Exception {
        // Hämta lista med alla spelare med scores i DB
        //Returnera listan.
        return null;
    }

    @MessageMapping("/Endgame")
    public void dropgame() throws Exception{
        // avsluta spel och gör en droptable
    }
}
