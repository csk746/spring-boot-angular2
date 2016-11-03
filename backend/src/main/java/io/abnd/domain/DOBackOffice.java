package io.abnd.domain;

import jdk.nashorn.internal.objects.annotations.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by lee on 2016. 11. 2..
 */

@Table(name = "dobackoffice")

@Entity

public class DOBackOffice {
    @Id
    @Column
    String id;

    @Column
    String name;

    @Column
    String content;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
}
