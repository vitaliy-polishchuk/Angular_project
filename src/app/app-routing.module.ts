import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AnimationComponent} from './animation/animation.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {InfoComponent} from './info/info.component';
import {TodolistComponent} from './todolist/todolist.component';

const routes: Routes = [
  {path: '', component: TodolistComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'info', component: InfoComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
