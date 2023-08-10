import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private modelService:AuthService,
              private alertifyService:AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.modelService.register(this.model).subscribe(next=>{
      this.alertifyService.success("Registered Successfully");

    }, error => {
      this.alertifyService.error("Failed to register");
    });
    // console.log(this.model);
   
  }
  cancel(){
    this.cancelRegister.emit(false);
    // console.log("Cancelled");
  }
}
