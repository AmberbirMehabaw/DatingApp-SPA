import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detail-value',
  templateUrl: './detail-value.component.html',
  styleUrls: ['./detail-value.component.scss']
})
export class DetailValueComponent implements OnInit {
value:any;
id:number = 0;
  constructor(private route:ActivatedRoute,
              private http:HttpClient) { }

  
  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id')!;

    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.getValues(this.id);
  }

  getValues(id: number){
  //  axios.get('https://localhost:7185/api/Values').then(res=>
  //  {
  //   this.values = res.data;
  //  },
  //  error => {console.log(error)});
  
  this.http.get('https://localhost:7185/Values/' + id).subscribe((data)=>{
    this.value= data;
  });
}
}
