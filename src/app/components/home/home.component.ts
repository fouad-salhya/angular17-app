import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import moment from 'moment'
import { Router } from '@angular/router';
import { ShareService } from '../../services/share.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgClass],
  providers: [QuizService, ShareService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

   private quizService  = inject(QuizService)
   private router       = inject(Router)
   private shareService = inject(ShareService)

   statusAdd:boolean = false;
   quizForm = new FormGroup({
    title: new FormControl(null, [Validators.email, Validators.required]),
    numberQuestion: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    numberPerson: new FormControl(null, [Validators.required]),
    dateDebut: new FormControl(null, [Validators.required]),
    dateFin: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })
  
    ngOnInit(): void {
      
    }

    // createQuiz() {
    //   this.quizService.addQuiz(this.quizForm.value)
    //       .subscribe(res => {
    //          this.router.navigate(['/quiz', res.quizId])
    //       })
    // }

    createQuiz() {
      this.shareService.addQuiz(this.quizForm.value)
      this.router.navigate(['/quiz'])
    }

    showFormAdd() {
      this.statusAdd = true;
    }

    hideFormAdd() {
      this.statusAdd = false
    }

   
}
