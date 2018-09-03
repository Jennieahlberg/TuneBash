package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
@Entity
public class Game {
    @Id
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
