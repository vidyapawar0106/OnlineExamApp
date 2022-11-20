import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {
  formref= new FormGroup({
    sname:new FormControl,
    sroll:new FormControl
  })

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  register()
  {
    let login=this.formref.value;
    let studentname=login.sname;

    sessionStorage.setItem("studentname",studentname);
    this.router.navigate(["StartExam"]);
    this.formref.reset();

  }
  

}
