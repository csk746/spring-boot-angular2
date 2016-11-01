/**
 * Created by lee on 2016. 11. 1..
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {HeroService} from './hero.service'
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);