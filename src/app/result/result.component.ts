import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { ExamService } from '../exam.service';
import { Question } from '../question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  question:Array<Question>=[];
  answer:Array<Answer>=[];
  backcolor:boolean=false;
 msg=sessionStorage.getItem("msg");
 myans:any=sessionStorage.getItem("myans");
 f1:boolean=false;
 

  constructor(public es:ExamService) { }

  ngOnInit(): void {
  }
  reviewexam()
  {
    this.f1=true;
    this.es.loadallquestions().subscribe({
      next:(data:any)=>this.question=data.questions,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("question loaded")
    });

    this.es.loadallanswer().subscribe({
      next:(data:any)=>this.answer=data.answers,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("answer loaded")
    });
    //console.log(this.question);
    //console.log(this.answer);
   
    

  }
}
