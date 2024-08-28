import { AfterContentInit, AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Quiz } from '../../models/quiz';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-quiz-detail',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgClass],
  providers: [QuizService, QuestionService, ShareService],
  templateUrl: './quiz-detail.component.html',
  styleUrl: './quiz-detail.component.css'
})
export class QuizDetailComponent implements OnInit, AfterContentInit{

    private quizService     = inject(QuizService)
    private activatedRoute  = inject(ActivatedRoute)
    private router          = inject(Router)
    private questionService = inject(QuestionService)
    private shareService    = inject(ShareService)

    quiz: Quiz = {};
    question : any[] = [];
    tableauNumber: number[] = []

    quizId: any;

    tableauNumbeResponse: number[] = []
  
    ngOnInit(): void {
        // this.getQuizId()
        this.getOneQuiz()
        this.genererTableau()
    }

    ngAfterContentInit(): void {

    }

    genererTableau() {
      return this.tableauNumber;  
    }

    // getQuizId() {
    //   this.activatedRoute.params.subscribe(params => {
    //      this.quizId = params['id']
    //   })
    // }

    // getOneQuiz() {
    //   this.quizService.getById(this.quizId)
    //       .subscribe(res => {
    //         this.quiz = res
    //         const length: any = this.shareService.dataStatus
    //         for(let i = 1; i<= length ; i++) {
    //           this.tableauNumber = [...this.tableauNumber, i]
    //         }  

    //       })
    // }

    getOneQuiz() {
      this.shareService.dataStatus.subscribe(res => {
          const length: any = res.numberQuestion
          console.log(res)
          for(let i =1; i<=length; i++) {
              this.tableauNumber = [...this.tableauNumber,i]
          }
      })
    }

    // saveQuestions() {
     
    //   let filtredData = this.question.filter(question => question !== null);
    //   let dataMaped = filtredData.map(q => ({"questions": q}))

    //   this.questionService.addQuestion(dataMaped)
    //        .subscribe(res => console.log(res))

    // }

    saveQuestions() {
        let filtredData = this.question.filter(question => question !== null);
        let dataMaped = filtredData.map(q => ({"questions": q}))
        this.shareService.addQuestions(dataMaped);
        this.quizService.addQuiz();
    }


}
