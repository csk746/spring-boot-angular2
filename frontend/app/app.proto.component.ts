/**
 * Created by lee on 2016. 11. 1..
 */

import { Component, OnInit } from '@angular/core';
import {Content} from './content';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

const CONTENTS: Content[] = [
    { id: 1, name: 'name',content:'content' },
];

const INPUTCONTENT :Content =
    { id: 2, name: 'name2',content:'content2' };


@Component({
    selector: 'proto-main',
    templateUrl: 'app/app.proto.component.html',
    styleUrls:["app/app.proto.component.css"]
})

export class ProtoComponent implements OnInit {
    constructor(private http:Http) { }

    ngOnInit() { }
    inputContent = INPUTCONTENT;
    contents = CONTENTS;
    title = 'DAOU CLOUD BACKOFFICE PROTO'

    selectedContent: Content;

    onSelect(content :Content){
        alert("!!!!!!!!!!!!!")
    }
    onSend(){
        this.http.post('http://localhost:8080/test', this.inputContent).map(res =>res.text()).subscribe();
    }
}

