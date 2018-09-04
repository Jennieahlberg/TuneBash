package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import javax.xml.transform.Result;
import java.util.List;

@Controller
public class SocketController {


    //Controller för att visa deltagare/spel
    @MessageMapping("/members")
    @SendTo("/")
    public String newPlayer(Player player) throws Exception{
        // save

        return player.getName();
    }
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
