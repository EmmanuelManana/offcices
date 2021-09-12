import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffMember } from 'src/app/interfaces/office-details/office-details';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-remove-staff-member',
  templateUrl: './remove-staff-member.component.html',
  styleUrls: ['./remove-staff-member.component.css'],
})
export class RemoveStaffMemberComponent implements OnInit {
  id?: string;

  @Input() selectedMember: StaffMember = { name: '', lastname: '' };
  @Output() closeParentPopUp = new EventEmitter<boolean>();

  constructor(
    private officeService: OfficeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.closeParentPopUp.emit(false);
    // I am being lazy here, could have used ngrx
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log('member to remove', this.selectedMember);
  }

  removeStaffMember(): void {
    // this.officeService.removeStaffMember(
    //   { name: f.value.first, lastname: f.value.last },
    //   this.id as string
    // );

    this.officeService.removeStaffMember(
      this.selectedMember,
      this.id as string
    );
  }
}
