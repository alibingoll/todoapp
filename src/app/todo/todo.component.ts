import { Model } from './../model';
import { TodoItem } from './../todo.item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent{

  constructor() { } 
  private name: string = "Sadık"
  model: Model = new Model();
 
  getName(){
    return this.model.name
  }
  getItems(){
    return this.model.items
  }


  addItems(){
    console.log("add item 2")
  }

}
