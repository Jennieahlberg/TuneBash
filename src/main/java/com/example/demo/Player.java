package com.example.demo;

public class Player {
    private String name;
    private int score;
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
