import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  getValues(){
    this.http.get('https://localhost:7185/api/Values').subscribe(data=>
    {this.values= data;});
    }
  registerToggle(){
    this.registerMode = true;
  }
  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
