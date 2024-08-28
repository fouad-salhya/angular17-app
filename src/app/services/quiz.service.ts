import { Injectable, inject } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private base_url = 'http://localhost:8000/quiz'
  private http = inject(HttpClient)
  private shareService = inject(ShareService)

  
  public addQuiz(): Observable<Quiz> {
    const data = this.shareService.getQuiz()
    return this.http.post<Quiz>(`${this.base_url}/create`, data)
  }

  public getById(id: string | any) {
    return this.http.get<Quiz>(`${this.base_url}/${id}`)
  }
}
