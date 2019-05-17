import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  login(mode){
    this.authService.login(mode);
  }
  ngOnInit() {
  }


}
