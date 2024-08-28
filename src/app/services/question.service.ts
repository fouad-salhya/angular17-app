import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private http = inject(HttpClient);

  private base_url = 'http://localhost:8000/questions';


  public addQuestion(data: any): Observable<any> {
     return this.http.post<any>(`${this.base_url}/create`,data);
  }
}
