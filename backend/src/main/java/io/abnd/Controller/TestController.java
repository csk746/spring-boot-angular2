package io.abnd.Controller;

import io.abnd.Repasitory.ContentRepository;
import io.abnd.Service.RTModel;
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

    @Autowired
    RTModel rtModel;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/test")
    void init(@RequestBody String content){

        JsonParser parser = new BasicJsonParser();

        Map<String, Object> li = parser.parseMap(content);

        String s1 = li.get("id")+"";
        String s2 = li.get("name")+"";
        String s3 = li.get("content")+"";

        DOBackOffice d = new DOBackOffice();

        d.setId(s1);
        d.setName(s2);
        d.setContent(s3);

        testInt.test(d);

    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/test2")
    @ResponseBody
    String test2(){
        System.out.println("!~~~~~~~~~~~~~~~~~~~~~~~~");
        List<DOBackOffice> li =rtModel.rtModel();
        Iterator<DOBackOffice> it = li.iterator();
        if (it.hasNext()) {
            for (DOBackOffice a : li) {
                System.out.println(a.toString()+"!!!!!!!!!!!!!");
            }
        }
        return "111";

    }
}
