import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ExamformComponent } from './examform/examform.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:"StartExam", component:ExamComponent},
  {path:"ExamForm" ,component:ExamformComponent},
  {path:"result",component:ResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
