import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { RemoveStaffMemberComponent } from './components/edit-delete-pop-up/remove-staff-member/remove-staff-member.component';
import { OfficeViewComponent } from './components/office-view/office-view.component';
import { OfficesComponent } from './components/offices/offices.component';

const routes: Routes = [
  { path: 'home', component: OfficesComponent },
  // I am being lazy here
  { path: 'officeview/:id', component: OfficeViewComponent },
  { path: 'officeview/:id', component: AddStaffComponent },
  { path: 'officeview/:id', component: RemoveStaffMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
