import { Quiz } from './../models/quiz';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  private data = new BehaviorSubject<any>({});
  dataStatus = this.data.asObservable();


  addQuiz(data: any) {


    const newData = {
      title: data.title,
      numberQuestion: data.numberQuestion,
      questions: this.data.getValue().questions,
      dateDebut: data.dateDebut,
      numberPerson: data.numberPerson,
      dateFin: data.dateFin
    };
     console.log(this.data.next(newData));
  }

  addQuestions(questions: any) {

    const currentData: any = this.data.getValue();
    const newData: Quiz = {
      ...currentData,
      questions: currentData.questions.concat(questions) 
    };
    this.data.next(newData);  
  }


  getQuiz(): Observable<Quiz> {
    return this.data.asObservable();
  }



}
