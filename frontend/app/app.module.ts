/**
 * Created by lee on 2016. 11. 1..
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";
import {ProtoComponent} from "./app.proto.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ProtoComponent,
    ],
    bootstrap: [ ProtoComponent ],

    providers: []
})
export class AppModule { }
