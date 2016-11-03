package io.abnd.Service;

import io.abnd.Repasitory.ContentRepository;
import io.abnd.domain.DOBackOffice;
import io.abnd.model.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by lee on 2016. 11. 1..
 */
@Service
public class TestImpl implements TestInt {
    @Autowired
    ContentRepository contentRepository;

    @Override
    public void test(DOBackOffice c) {
        System.out.println("!!!!!!!!!!!!!!");
        contentRepository.save(c);
    }
}
