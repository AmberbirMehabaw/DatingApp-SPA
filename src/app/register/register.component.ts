import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
              private notificationService:NotificationService) { }

  ngOnInit() {
  }

  register(){
    this.modelService.register(this.model).subscribe(next=>{
      // this.notificationService.showToastr("success", "Record updated successfully!");

    }, error => {
      console.log("Failed to register",error);
    });
    console.log(this.model);
   
  }
  cancel(){
    this.cancelRegister.emit(false);
    console.log("Cancelled");
  }
}
