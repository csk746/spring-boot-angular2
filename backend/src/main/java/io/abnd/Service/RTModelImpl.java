package io.abnd.Service;

import io.abnd.Repasitory.ContentRepository;
import io.abnd.domain.DOBackOffice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lee on 2016. 11. 3..
 */
@Service
public class RTModelImpl implements RTModel {
    @Autowired
    ContentRepository contentRepository;

    @Override
    public List<DOBackOffice> rtModel() {

        System.out.println("리턴값 뭐임               "+ contentRepository.findAll());
        return contentRepository.findAll();
    }
}
