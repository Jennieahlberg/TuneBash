package com.example.demo;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.MediaType;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@RestController
public class QuestionController {


    @Autowired
    private PlayerRepository prepo;
    @Autowired
    private QuestionsRepository repository;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @GetMapping("/")
    public String hello() {
        return "app is running";
    }

    @GetMapping("/questions")
    public List<Questions> getUsers() {
        List<Questions> questions =  repository.getAllByLanguage("Engelska");
        return questions;
    }

    @GetMapping("/add/{name}/{score}/{answer}")
    public String add(@PathVariable String
                              name, @PathVariable int score, @PathVariable String answer) {
        prepo.save(new Player(1, name, score, answer));
        return "ok";
    }

    @GetMapping(value="/getquestions/{numberOfQuestions}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Questions> getQuestions(@PathVariable  String level, String category, int numberOfQuestions, String language,  HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        List<Questions> questions = new ArrayList<>();
        Random rand = new Random();
        int i = 0;
        if(level!=null){
            repository.getAllByLevel(level){
                if(category!=null)
            }
        }
        while (i < numberOfQuestions) {
            int random = rand.nextInt(170) + 1;
            if (repository.existsById(random)) {
                questions.add(repository.getById(random));
                i++;
            }
        }
        return questions;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/members", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void newmember(@RequestBody Player player, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
       
        prepo.save(player);
        
    }
}

//    @GetMapping("/")
//    public String test() {
//        simpMessagingTemplate.convertAndSendToUser("/ topic"), new Player("/"));
//
//        return "ok";
//    }
//}



//    @GetMapping("/addfromexcelfile")
//    public String addFromExcel() throws IOException, InvalidFormatException {
//        ExcelReader er = new ExcelReader();
//        List<Questions> questions = er.questAdder();
//        for (Questions q: questions) {
//            repository.save(q);
//        }
//        return "ok";
//    }


//    @GetMapping("/delete/{id}")
//    public Iterable<Admin> delete(@PathVariable long id) {
//        repository.deleteById(id);
//        return repository.findAll();
//    }
//
//    @GetMapping("/deleteAll")
//    public Iterable<Admin> deleteAll() {
//        repository.deleteAll();
//        return repository.findAll();
//    }
//
//    @GetMapping("/find/{username}")
//    public Iterable<Admin> findByUsername(@PathVariable String username) {
//        return repository.findByUsername(username);
//    }

//}
