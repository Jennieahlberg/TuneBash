package com.example.demo;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameController {

    @PostMapping(value = "/createplayers", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createPlayers(@RequestBody Player player, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");

    }
}
