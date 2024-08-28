import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgClass],
  providers: [AuthService],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent implements OnInit{
   
   private authService = inject(AuthService);
   private router      = inject(Router)

   signupForm = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

   registre() {
     this.authService.createUser(this.signupForm.value)
         .subscribe((res) => console.log(res))
   }
   
   getUsers() {
    this.authService.gettAllUsers()
         .subscribe(res => {
           this.router.navigate(['/login'])
         });
   }
}
