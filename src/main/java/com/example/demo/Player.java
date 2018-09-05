package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name="player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="gameid")
    private int gameId;

    @Column(name="name")
    private String name;

    @Column(name="score")
    private int score;

    @Column(name="answer")
    private String answer;

    public Player() {
    }

    public Player(int gameid, String name, int score, String answer) {
        this.gameId = gameId;
        this.name = name;
        this.score = score;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
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

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", gameId=" + gameId +
                ", name='" + name + '\'' +
                ", score=" + score +
                ", answer='" + answer + '\'' +
                '}';
    }
}
