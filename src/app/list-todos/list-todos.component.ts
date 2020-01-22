import { Component, OnInit, NgModule } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

export class Todo{
  
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:string){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
todos=[];
name='';
message='';
  constructor(private route:ActivatedRoute,
    private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos(this.name).subscribe(
      response =>{
        this.todos=response;
      }
    );
  }

  deleteTodo(id:string){
    this.todoService.deleteTodo(this.name,id).subscribe(
      respose =>{
        this.message=`Todo with id ${id} deleted successfully`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id:string){
   this.router.navigate(['todo',this.name,id]);
  }
  createTodo(){
    this.router.navigate(['todo',this.name,-1]);
   }


  

}
