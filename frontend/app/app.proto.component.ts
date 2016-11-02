/**
 * Created by lee on 2016. 11. 1..
 */

import {Component, OnInit, Input} from '@angular/core';
import {Content} from './content';
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
const CONTENTS: Content[] = [
    { id: 1, name: 'name',content:'content' },
];

const INPUTCONTENT :Content =
    { id: 0, name: "",content:"" };

@Component({
    selector: 'proto-main',
    templateUrl: 'app/app.proto.component.html',
    styleUrls:["app/app.proto.component.css"]
})

export class ProtoComponent implements OnInit {

    public content = {id:0, name:"",content:""};

    constructor(private http:Http) { }

    ngOnInit() { }
    inputContent = INPUTCONTENT;
    contents = CONTENTS;
    title = 'DAOU CLOUD BACKOFFICE PROTO'

    selectedContent: Content;

    onSelect(content :Content){
        alert("!!!!!!!!!!!!!")
    }
    headers = new Headers({'Content-Type':'text/plain'});

    options = new RequestOptions({headers:this.headers});
    private jsonString;



    onSend(content){
        this.jsonString =JSON.stringify(content);
        this.http.post('http://localhost:8080/test', this.jsonString,this.options).map(res =>res.text()).subscribe();
    }
}

