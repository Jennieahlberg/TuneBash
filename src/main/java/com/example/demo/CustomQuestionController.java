package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomQuestionController {

    @Autowired
    private CustomQuestionRepository repo;


    @PostMapping(value = "/addcustomquestion", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void customquestion(@RequestBody CustomQuestion question, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        repo.save(question);
    }

    @PostMapping(value = "/getcustomquiz", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomQuestion> customquiz(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return
    }

}
