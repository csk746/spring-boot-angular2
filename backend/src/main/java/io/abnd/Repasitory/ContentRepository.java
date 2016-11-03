package io.abnd.Repasitory;

import io.abnd.domain.DOBackOffice;
import io.abnd.model.Content;
import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by lee on 2016. 11. 2..
 */
@Repository
public interface ContentRepository extends JpaRepository<DOBackOffice,Integer> {
}
