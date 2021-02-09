import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  text: string[] = [];
  task: string = '';
  completed: boolean | undefined;
  classname: string = 'item_1';
  newItem: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  done(event: any) {
    if (!this.completed) {
      this.classname = 'item_1b'
      return this.completed = true
    } else this.classname = 'item_1'
    return this.completed = false
  }


//   remove(id) {
//    this.newItem = this.text.filter((item) => item.id !== id){
//      this.text.push(this.newItem.toString())
//   }
// }

  myEvent(event: any) {
    if (this.task !== '') {
      this.text.push(this.task)
      this.task = '';
    }
  }
}
