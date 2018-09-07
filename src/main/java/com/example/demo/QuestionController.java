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
import java.util.*;


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
        List<Questions> questions = repository.getAllByLanguage("Engelska");
        return questions;
    }

    @GetMapping("/add/{name}/{score}/{answer}")
    public String add(@PathVariable String
                              name, @PathVariable int score, @PathVariable String answer) {
        prepo.save(new Player(1, name, score, answer));
        return "ok";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/getquestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Questions> getQuestions(@RequestBody GenerateQuiz quiz, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        List<Questions> firstfilter = repository.getAllByCategoryAndLevelAndLanguage(quiz.getCategory(), quiz.getLevel(),quiz.getLanguage());
        List<Questions> questions = new ArrayList<>();
        Collections.shuffle(firstfilter);
        for (int i = 0; i <quiz.getNumberOfQuestions(); i++) {
            questions.add(firstfilter.get(i));
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
