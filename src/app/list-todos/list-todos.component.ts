import { Component } from '@angular/core';

export class Todo{
  constructor(public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date){
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos=[
    new Todo(1,"description1",false, new Date()),
    new Todo(2,"description2",false, new Date()),
    new Todo(3,"description3",false, new Date()),
    new Todo(4,"description4",false, new Date())
  ]

  // todos=[
  //   {id: '1', title: 'Title',  description: 'description1', completed: false},
  //   {id: '2', title: 'Title',  description: 'description2', completed: false},
  //   {id: '3', title: 'Title',  description: 'description3', completed: false},
  //   {id: '4', title: 'Title',  description: 'description4', completed: false},
  // ]

  // todo ={
  //   id: 0,
  //   title: 'Title ones',
  //   completed: false
  // }
}
