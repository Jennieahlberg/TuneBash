package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name="player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String name;

    @Column(name="score")
    private int score;

    @Column(name="answer")
    private String answer;

    public Player() {
    }

    public Player(String name, int score, String answer) {
        this.name = name;
        this.score = score;
        this.answer = answer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
