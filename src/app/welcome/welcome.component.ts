import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name=''
  
  constructor(private route:ActivatedRoute){

  }

  ngOnInit() {
    // this.route.snapshot.params['name']; 
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}
