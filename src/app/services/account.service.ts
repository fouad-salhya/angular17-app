import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  private tokenService = inject(TokenService)

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn())
  authStatus = this.loggedIn.asObservable()

  changeStatus(value: boolean) {
    this.loggedIn.next(value)
  }
}
