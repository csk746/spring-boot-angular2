package io.abnd.Controller;

import io.abnd.Repasitory.ContentRepository;
import io.abnd.Service.TestInt;
import io.abnd.domain.DOBackOffice;
import io.abnd.model.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.BasicJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by lee on 2016. 11. 1..
 */
@RestController
public class TestController {

    @Autowired
    TestInt testInt;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/test")
    void init(@RequestBody  String content){

        JsonParser parser = new BasicJsonParser();
//        System.out.println(content);
        Map<String, Object> li = parser.parseMap(content);

        String s1 = li.get("id")+"";
        String s2 = li.get("name")+"";
        String s3 = li.get("content")+"";

        System.out.println(s1+"  " + s2+"  "+s3);
        DOBackOffice d = new DOBackOffice();
        d.setId(s1);
        d.setName(s2);
        d.setContent(s3);
        testInt.test(d);


    }
}
