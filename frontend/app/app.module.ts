/**
 * Created by lee on 2016. 11. 1..
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HttpModule} from "@angular/http";
import {HeroService} from "./hero.service";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap: [ AppComponent ],

    providers: [HeroService]
})
export class AppModule { }
