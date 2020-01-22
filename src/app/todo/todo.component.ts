import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
name:string;
id:number;
message:string;
todo:Todo=new Todo(this.id,'',false,'10/10/2019');
  constructor(private route:ActivatedRoute,
    private todoService:TodoDataService, private router:Router) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
    this.id=this.route.snapshot.params['id'];
    if(this.id > 0){
    this.getTodo();
    }
  }
  getTodo(){
    this.todoService.getTodo(this.name,this.id).subscribe(
      response =>{
        this.todo=response       
      }
    );
  }
  backToList(){
    this.router.navigate(['todos',this.name]);
  }
  saveTodo(){
   
    this.todoService.saveTodo(this.name,this.id,this.todo).subscribe(
     response =>{
      if(this.id === -1){
        this.message="created successfully!";  
      }else{
        this.message="updated successfully!";  
      }    
      }
    );

    }
  }



