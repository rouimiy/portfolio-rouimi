import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {Hero} from './components/hero/hero';
import {Skills} from './components/skills/skills';
import {Projects} from './components/projects/projects';
import {Experiences} from './components/experiences/experiences';
import {Contact} from './components/contact/contact';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Hero,
    Skills,
    Projects,
    Experiences,
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
export class AppModule {
}
