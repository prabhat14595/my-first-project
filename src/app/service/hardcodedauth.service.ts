import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  authenticate(username: string, password: string) {
    console.log("before: " +this.isUserLoggedIn());
    if(username==="Prabhat" && password==="password"){
      console.log("After: " + this.isUserLoggedIn());
      sessionStorage.setItem("authenticatorUser", username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatorUser");
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem("authenticatorUser");
  }

}
