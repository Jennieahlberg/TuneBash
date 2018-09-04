package com.example.demo;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/")
    public String hello() {
        return "app is running";
    }

    @GetMapping("/questions")
    public List<Questions> getUsers() {
        List<Questions> questions = (List<Questions>) repository.findAll();
        return questions;
    }

    @GetMapping("/add/{name}/{score}/{answer}")
    public String add(@PathVariable String
                              name, @PathVariable int score, @PathVariable String answer) {
        prepo.save(new Player(1, name, score, answer));
        return "ok";
    }

    @GetMapping("/get15questions")
    public List<Questions> get15questions() {
        List<Questions> questions = new ArrayList<>();
        Random rand = new Random();
        int i = 0;
        while (i < 15) {
            int random = rand.nextInt(170) + 1;
            if (repository.existsById(random)) {
                questions.add(repository.getById(random));
                i++;
            }
        }
        return questions;
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
    }

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