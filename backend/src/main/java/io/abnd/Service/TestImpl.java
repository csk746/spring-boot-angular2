package io.abnd.Service;

import org.springframework.stereotype.Service;

/**
 * Created by lee on 2016. 11. 1..
 */
@Service
public class TestImpl implements TestInt {

    @Override
    public void test() {
        System.out.println("!!!!!!!!!!!!!!");
    }
}
