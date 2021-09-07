import { Injectable } from '@angular/core';
import { Office } from '../interfaces/office-details/office-details';
import { OFFICES } from '../mocks/mock-offices';
import { Observable, of } from 'rxjs';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  private officeCollection: AngularFirestoreCollection<Office>;
  offices: Observable<Office[] | any[]>;
  officeInView?: {};

  constructor(public firestore: AngularFirestore) {
    // this.offices = firestore.collection('offices').valueChanges();

    this.officeCollection = this.firestore.collection<Office>('offices');

    // this.offices$ =
    this.offices = this.officeCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Office;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getOffices(): Observable<Office[]> {
    // this.offices = this.firestore.collection('offices').valueChanges();
    // // const offices = of(OFFICES)
    // return this.offices;
    // console.log("ge offices ===>", this.offices.subscribe( a => console.log(a)))
    return this.offices;
  }

  addOffice(office: Office) {
    return this.firestore.collection('offices').add(office);
  }

  getOfficeByID(id: string) {
    // console.log(
    //   'this doc: ',
    //   this.firestore.collection('offices', (ref) =>
    //     ref.where('id', '==', 'Emmanue')
    //   ).valueChanges({idField: 'Emmanue'}).subscribe( dov => console.log("dov dov dov:", dov))
    // );

    // this.firestore.collection('offices', (ref) =>
    //   ref.where('id', '==', 'Emmanue')
    // );

    // this.offices.subscribe( offices => {
    //   offices.map( office => {
    //     if (office.id == id){
    //       // built an office here
    //       this.officeInView = office;
    //       return office;
    //     }
    //   })
    // })
    //   let obj = {};
    //  await this.offices.forEach(office => {
    //    let test = office.filter( office => {
    //       return office.id == id;
    //     })
    //     obj = test[0]
    //     console.groupCollapsed("test: ", test[0])
    //     return test[0]
    //   })
  }
}
