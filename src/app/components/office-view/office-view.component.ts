import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfficeService } from 'src/app/services/office.service';
import { Office } from 'src/app/interfaces/office-details/office-details';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StaffMember } from '../../interfaces/office-details/office-details';


@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css'],
})
export class OfficeViewComponent implements OnInit {
  office?: any;
  officeInView: {} = {};
  popUp?: boolean = false;
  selectedMember?: {};
  id: string = 'hello';

  staffMembers?: Office[] | any;

  addStaffPopUp?: boolean = false;

  constructor(
    private officeService: OfficeService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getOFFiceByID(this.id);
    console.log('offiview ID on init: ', this.id);
  }

  getOFFiceByID(id: string): void {
    this.firestore
      .collection('offices', (ref) => ref.where('id', '==', id))
      .valueChanges({ idField: id })
      .subscribe((doc) => {
        doc.map((dov) => {
          this.officeInView = dov;
          this.staffMembers = dov.staffMembers;
          console.log(dov);
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(member: []): void {
    console.log('selected member: ', member);
    this.selectedMember = member;
    this.showPop(true);
  }

  showPop(popUp: boolean): void {
    this.popUp = popUp;
    console.log('addStaffPopUp: ', this.addStaffPopUp);
  }

  addStaff(addStuff: boolean): void {
    console.log('add staff clicked: adn passed boolean is: ', addStuff);
    this.addStaffPopUp = addStuff;
    this.showPop(addStuff);
  }

  searchMember(search: string): void {
    if (this.staffMembers) {
      this.staffMembers = this.staffMembers.filter((member: StaffMember) =>
        member.name.toLowerCase().startsWith(search.toLowerCase())
      );
    }
  }
}
