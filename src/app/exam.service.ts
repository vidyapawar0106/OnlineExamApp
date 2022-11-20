import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './answer';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(public http:HttpClient) { }
   
  loadallquestions():Observable<Question[]>{
    return this.http.get<Question[]>("./assets/question.json");
  }

  loadallanswer():Observable<Answer[]>{
    return this.http.get<Answer[]>("./assets/answer.json");
  }
}
