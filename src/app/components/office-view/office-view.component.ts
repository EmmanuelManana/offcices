import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfficeService } from 'src/app/services/office.service';
import { Office } from 'src/app/interfaces/office-details/office-details';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css'],
})
export class OfficeViewComponent implements OnInit {
  office?: any;
  officeInView: {} = {};
  popUp?: boolean = false;

  constructor(
    private officeService: OfficeService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getOFFiceByID(
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );
  }

  getOFFiceByID(id: string): void {
    this.firestore
      .collection('offices', (ref) => ref.where('id', '==', id))
      .valueChanges({ idField: id })
      .subscribe((doc) => {
        doc.map((dov) => {
          this.officeInView = dov;
          console.log(dov);
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  showPop(popUp: boolean): void {
    this.popUp = popUp;
  }
}
