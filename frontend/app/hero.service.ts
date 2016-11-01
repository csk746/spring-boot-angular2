/**
 * Created by lee on 2016. 11. 1..
 */

import {Injectable, Inject} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class HeroService{

   // @Inject(Http)
   // http:Http;
    private heroesurl = 'localhost:8080/test';
    constructor(private http:Http){
        // this.http=https;
    }


    testHeroes(){
        this.http.get('http://localhost:8080/test').map(res =>res.text()).subscribe();
    }

}