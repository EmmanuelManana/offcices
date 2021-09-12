import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffMember } from 'src/app/interfaces/office-details/office-details';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-edit-staff-member',
  templateUrl: './edit-staff-member.component.html',
  styleUrls: ['./edit-staff-member.component.css'],
})
export class EditStaffMemberComponent implements OnInit {
  id?: string;

  @Input() selectedMember: StaffMember = { name: '', lastname: '' };

  constructor(
    private officeService: OfficeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  onSubmit(f: NgForm) {
   
    this.officeService.editStaffMember(
      { name: f.value.first, lastname: f.value.last },
      this.selectedMember,
      this.id as string
    );
  }
}
