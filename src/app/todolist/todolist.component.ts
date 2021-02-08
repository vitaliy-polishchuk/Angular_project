import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  text: '' | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
   addText(){

  }

   inputHandler = (event: any) => {
    const value = event.target.value
    this.text = value
  }
}
