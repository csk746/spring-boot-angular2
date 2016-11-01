package io.abnd.Controller;

import io.abnd.Service.TestInt;
import io.abnd.model.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by lee on 2016. 11. 1..
 */
@RestController
public class TestController {

    @Autowired
    TestInt testInt;

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    void ttt(@RequestBody Content content){
        int s = content.id;
        String s2 = content.name;
        String s3 = content.content;

        String s4=s2+s3;

        testInt.test();
    }
}
