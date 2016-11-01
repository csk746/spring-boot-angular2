/**
 * Created by lee on 2016. 11. 1..
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ProtoComponent }  from './app.proto.component';
import { HeroDetailComponent } from './refer_hero-detail.component';
import { HttpModule } from "@angular/http";
import { HeroService } from "./refer_hero.service";

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

    // providers: [HeroService]
})
export class AppModule { }
