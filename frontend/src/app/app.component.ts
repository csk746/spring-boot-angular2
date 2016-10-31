import { Component } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Component({
    selector: 'my-app',
   templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']

})
export class AppComponent {
    public heroes = HEROES;
    selectedHero:Hero;
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'windstorm'
    };
    onSelect(hero: Hero) { this.selectedHero = hero; }
}

