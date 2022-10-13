import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailValueComponent } from './detail-value/detail-value.component';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  {path:'value', component:ValueComponent},
  {path:'value/:id', component:DetailValueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
