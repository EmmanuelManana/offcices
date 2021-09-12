import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficeService } from 'src/app/services/office.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  id?: string;

  @Input() recordID?: string;

  @Output() addStaffPopUp = new EventEmitter<boolean>();

  constructor(
    private officeService: OfficeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('firstname input: ', this.firstName);
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    console.log(
      'being lazy: ',
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );
    // this.addStaffMember(this.activatedRoute.snapshot.paramMap.get('id') as string)
  }

  // get id from parent component
  addStaffMember(f: NgForm) {
    this.officeService.addStaffMember(
      { name: f.value.first, lastname: f.value.last},
      this.id as string
    );

    // this.officeService.removeStaffMember(
    //   { name: f.value.first, lastname: f.value.last },
    //   this.id as string
    // );

    this.addStaffPopUp.emit(false);
  }

  getID() {
    alert(this.recordID);
  }

  closePop(): void {
    this.addStaffPopUp.emit(false);
  }
}
