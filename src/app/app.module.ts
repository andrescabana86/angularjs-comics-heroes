import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes'

// Services
import { HeroesService } from './services/heroes.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeDetailsComponent } from './components/heroe-details/heroe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroesComponent,
    HeroeComponent,
    AboutComponent,
    HomeComponent,
    HeroeDetailsComponent
  ],
  imports: [ BrowserModule, APP_ROUTING ],
  providers: [ HeroesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
