package io.abnd.model;

/**
 * Created by lee on 2016. 11. 1..
 */
public class Message {
    public String title;
    public String message;

    public Message(String title, String message){
        this.title = title;
        this.message =message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
