import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data: any) {

    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.userId)
    localStorage.setItem('admin', data.admin)
  }


  handle(data: any) {
    this.set(data)
  }


  getToken() {
    return localStorage.getItem('token')
  }

  getUserId() {
    return localStorage.getItem('userId')
  }

  getRole() {
    return localStorage.getItem('admin')
  }


  remove() {
    localStorage.removeItem('userId')
    localStorage.removeItem('admin')
    localStorage.removeItem('token')
  }

  decode(payload: any) {
    return JSON.parse(atob(payload))
  }

  payload(token: any) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }

  isValid() {

    const token   = this.getToken()
    const user_id = this.getUserId()

    if(token) {
      const payload = this.payload(token)
      if(payload) {
        return user_id == payload.user_id
      }
    }
    return false
  }

  getInfo() {
  
    const token = this.getToken()
    if(token) {
      const payload = this.payload(token)
      return payload ? payload : null;
    }
  }

  loggedIn() {
    return this.isValid()
  }


}


