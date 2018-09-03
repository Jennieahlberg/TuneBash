package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class Game {
    private int id;
    public List<Questions> questions = new ArrayList<>();
    public List<Player> players = new ArrayList<>();

    public Game() {}

    public Game(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
