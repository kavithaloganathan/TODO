import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import { API_URI } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  retrieveAllTodos(name:string){
    // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeaders();
    // let headers=new HttpHeaders({Authorization:basicAuthHeaderString});
    //return this.http.get<Todo[]>(`${API_URI}/users/${name}/todos`,{headers:headers});
        return this.http.get<Todo[]>(`${API_URI}/users/${name}/todos`);
      }

      deleteTodo(name,id){
        console.log("Inside delete");
        return this.http.delete(`${API_URI}/users/${name}/todos/${id}`);
      }
      getTodo(name,id){
        console.log("Inside delete");
        return this.http.get<Todo>(`${API_URI}/users/${name}/todos/${id}`);
      }
      saveTodo(name,id,todo){
        console.log(id);
        if(id == -1){
          return this.http.post(`${API_URI}/users/${name}/todos`,todo);
        }
        else{
        return this.http.put<Todo>(`${API_URI}/users/${name}/todos/${id}`,todo);
        }
      }

      // createBasicAuthenticationHttpHeaders(){
      //   let username="kavitha"
      //   let password="kavi"
      //   return "Basic "+ window.btoa(username +":"+password)
      // }
}
