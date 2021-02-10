import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ContainerComponent } from './container/container.component';
import {FormsModule} from '@angular/forms';
import { AnimationComponent } from './animation/animation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodolistComponent,
    ContainerComponent,
    AnimationComponent,
    NotfoundComponent,
    InfoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
