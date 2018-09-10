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
    private CustomQuestionRepository cqrepo;

    @GetMapping("/")
    public String hello() {
        return "app is running";
    }

    @GetMapping(value = "/questions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Questions> getUsers(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        List<Questions> questions = repository.getAllByLanguage("Engelska");
        return questions;
    }


    //@CrossOrigin(origins = "http://localhost:3000/getquestions?level=level&numberOfQuestions=numberOfQuestions&category=category&language=laguage")
    @GetMapping(value = "/getquestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Questions> getquestions(@PathVariable String level, @PathVariable int numberOfQuestions, @PathVariable String category, @PathVariable String language, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        List<Questions> firstfilter = repository.getAllByCategoryAndLevelAndLanguage(category, level, language);
        List<Questions> questions = new ArrayList<>();
        Collections.shuffle(firstfilter);
        for (int i = 0; i < numberOfQuestions; i++) {
            questions.add(firstfilter.get(i));
        }
        return questions;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/addcustomquestion", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void customquestion(@RequestBody CustomQuestion question, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        cqrepo.save(question);
    }

    @GetMapping(value = "/getcustomquiz", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomQuestion> customquiz(@PathVariable int pin, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        List<CustomQuestion> questions = cqrepo.getAllByPin(pin);
        return questions;
    }

    @PostMapping(value = "/members", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void newmember(@RequestBody Player player, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        prepo.save(player);

    }
}

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

