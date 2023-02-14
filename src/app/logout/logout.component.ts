import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private hardcodedauthService: HardcodedauthService) {
    
  }

  ngOnInit() {
    this.hardcodedauthService.logout();
  }
}
