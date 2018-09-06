package com.example.demo;

public class GenerateQuiz {
    private int numberOfQuestions;
    private String level;
    private String category;
    private String language;

    public GenerateQuiz(){}
    public GenerateQuiz(int numberOfQuestions, String level, String category, String language) {
        this.numberOfQuestions = numberOfQuestions;
        this.level = level;
        this.category = category;
        this.language = language;
    }

    public int getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public String getLevel() {
        return level;
    }

    public String getCategory() {
        return category;
    }

    public String getLanguage() {
        return language;
    }
}
