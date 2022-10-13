import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient,
              private router:Router) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
  //  axios.get('https://localhost:7185/api/Values').then(res=>
  //  {
  //   this.values = res.data;
  //  },
  //  error => {console.log(error)});
  
  this.http.get('https://localhost:7185/Values').subscribe(data=>
  {this.values= data;});
  }
  // detail(id:string){
  //   this.router.navigate('value/'+id);
  // }
}
