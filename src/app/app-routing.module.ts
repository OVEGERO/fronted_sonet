import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstListComponent } from './first-list/first-list.component';

const routes : Routes = [
  { path : '', redirectTo: '/first-list', pathMatch: 'full' },
  { path : 'first-list', component : FirstListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
