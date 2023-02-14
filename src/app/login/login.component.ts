import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username= 'Prabhat';
    password = '';
    invalidcreds=false;
    errorMessage='Invalid Credentials Error';

    // Dependency injection
    constructor(private router: Router, 
      private hardcodedauthService: HardcodedauthService){}


    ngOnInit() {
    }

    handleLogin(){
      // console.log(this.username);
      // console.log(this.password);  
      // if(this.username==="Prabhat" && this.password==="password"){
        if(this.hardcodedauthService.authenticate(this.username, this.password)){
        this.invalidcreds=false;
        this.router.navigate(['welcome', this.username]);
        }else{
        this.invalidcreds=true;
        }
    }

}

