import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, HttpClientModule],
  providers: [AuthService, TokenService, AccountService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

   private authService    = inject(AuthService)
   private router         = inject(Router)
   private tokenService   = inject(TokenService) 
   private accountService = inject(AccountService)

   signinForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })


   ngOnInit(): void {
       
   }

   authenticated() {
     this.authService.auth(this.signinForm.value)
         .subscribe(res => {
           this.handlResponse(res)
         })
   }

   handlResponse(res: any) {
    this.tokenService.handle(res)
    this.accountService.changeStatus(true)
    return this.router.navigate(['/'])
  }


}

