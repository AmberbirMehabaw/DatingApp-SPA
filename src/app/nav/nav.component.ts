import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};
  constructor(private modelService: AuthService,
              private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
login(){
  this.modelService.login(this.model).subscribe(next=>{
    this.alertifyService.success("Logged in successful");
  }, error => {
    this.alertifyService.error("Failed to login");
  });
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !!token;
}

logout(){
  localStorage.removeItem('token');
  this.alertifyService.message('logged out');
}
  
}
