package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;

//by Gustaf Matsson
//2018-09-04
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
//    @GetMapping("/addfromexcelfile")
//    public String addFromExcel() {
//        String path="C:\\Book2.xlsx";
//        try {
//
//            File f = new File( path );
//            Workbook wb = WorkbookFactory.create(f);
//            Sheet mySheet = wb.getSheetAt(0);
//            Iterator<Row> rowIter = mySheet.rowIterator();
//            for ( Iterator<Row> rowIterator = mySheet.rowIterator() ;rowIterator.hasNext(); )
//            {
//                for (  Iterator<Cell> cellIterator = ((Row)rowIterator.next()).cellIterator() ; cellIterator.hasNext() ;  )
//                {
//                    System.out.println ( ( (Cell)cellIterator.next() ).toString() );
//                }
//                System.out.println( " **************************************************************** ");
//            }
//        } catch ( Exception e )
//        {
//            System.out.println( "exception" );
//            e.printStackTrace();
//        }
//        return "ok";
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
