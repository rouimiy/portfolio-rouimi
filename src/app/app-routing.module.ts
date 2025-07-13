import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {About} from './components/about/about';
import {Hero} from './components/hero/hero';
import {Skills} from './components/skills/skills';
import {Projects} from './components/projects/projects';
import {Experiences} from './components/experiences/experiences';
import {Clients} from './components/clients/clients';
import {Contact} from './components/contact/contact';

const routes: Routes = [
  {path: '', component: Hero},
  {path: 'about', component: About},
  {path: 'skills', component: Skills},
  {path: 'projects', component: Projects},
  {path: 'experiences', component: Experiences},
  {path: 'clients', component: Clients},
  {path: 'contact', component: Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
