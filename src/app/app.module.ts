import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {Hero} from './components/hero/hero';
import {About} from './components/about/about';
import {Skills} from './components/skills/skills';
import {Projects} from './components/projects/projects';
import {Experiences} from './components/experiences/experiences';
import {Clients} from './components/clients/clients';
import {Contact} from './components/contact/contact';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Hero,
    About,
    Skills,
    Projects,
    Experiences,
    Clients,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
