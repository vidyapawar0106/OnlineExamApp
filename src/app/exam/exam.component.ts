import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../answer';
import { ExamService } from '../exam.service';
import { Question } from '../question';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  question:Array<Question>=[];
  answer:Array<Answer>=[];
  myAns=new Map();
  msg:string="";
  f1:boolean=false;
  f2:boolean=false;
  
  b1:boolean=true;
  student=sessionStorage.getItem("studentname");
  

  constructor(public es:ExamService,public router:Router) { } //DI for exam service

  ngOnInit(): void {
     
  }
  ans(qid:any,ans:any){
   // console.log(qid+ " " +ans);
    this.myAns.set(qid,ans);
    console.log(this.myAns);
  }
  startexam()
  {
    this.b1=false;
    this.f1=true;
    this.f2=true;
    
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
    

  }
   submitExam()
  {
     let count=0;
     this.answer.forEach((value:any,index:any)=> {
      console.log(value.qid+" "+index+" "+this.myAns.has(index+1)+" "+this.myAns.get(index+1));
      this.myAns.forEach((v:any,k:any)=>
      {
        if(k==value.qid && v==value.ans){
          count++;
          //console.log(count);
        }
      })
     })
     console.log(count);
     this.msg="congrates! your score is "+count+" out of 10";
     sessionStorage.setItem("msg",this.msg);
    
     this.router.navigate(["result"]);
     

   }


  }

