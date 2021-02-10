import {Component, OnInit} from '@angular/core';

type TodoItemType = {
  name: string
  completed: boolean
  priority: number
};

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  listOfItems: TodoItemType[] = [];
  currentInputText = '';
  completed: boolean | undefined;
  classname = 'item_1';
  newItem: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const item: TodoItemType = {
      name: 'Blakaj',
      completed: true,
      priority: 2,
    };
    this.listOfItems.push(item);

    const item2: TodoItemType = {
      name: 'Bfgdfgfaj',
      completed: false,
      priority: 2
    };
    this.listOfItems.push(item2);

    const item3: TodoItemType = {
      name: 'Blakaertertretet',
      completed: true,
      priority: 4
    };
    this.listOfItems.push(item3);
  }

  toggleComplete(item: TodoItemType): void {
    item.completed = !item.completed;
  }


  remove(item: TodoItemType): void {
    this.listOfItems = this.listOfItems.filter((currentItem: TodoItemType) => {
      const isItemForDeleting = item.name === currentItem.name;
      return isItemForDeleting ? false : true;
    });
  }


  addNewItem(): void {
    if (this.currentInputText !== '') {
      const newItem: TodoItemType = {
        name: this.currentInputText,
        completed: false,
        priority: Math.floor(Math.random() * 6) + 1
      };
      this.listOfItems.push(newItem);
      this.currentInputText = '';
    }
  }

  getClassName(item: TodoItemType): string {
    if (!item.completed) {
      return 'item_1';
    } else {
      return 'item_1b';
    }
  }

}
