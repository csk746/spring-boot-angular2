package io.abnd.Controller;

import io.abnd.Service.TestInt;
import io.abnd.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lee on 2016. 11. 1..
 */
@RestController
public class TestController {

    @Autowired
    TestInt testInt;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    void ttt(){
        testInt.test();
    }
}
