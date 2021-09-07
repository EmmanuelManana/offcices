import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeViewComponent } from './components/office-view/office-view.component';
import { OfficesComponent } from './components/offices/offices.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OfficesComponent },
  { path: 'officeview/:id', component: OfficeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
