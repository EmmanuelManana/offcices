import { Injectable } from '@angular/core';
import {
  Office,
  StaffMember,
} from '../interfaces/office-details/office-details';
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
import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  private officeCollection: AngularFirestoreCollection<Office>;
  offices: Observable<Office[] | any[]>;
  officeInView?: {};

  constructor(public firestore: AngularFirestore) {
    this.officeCollection = this.firestore.collection<Office>('offices');

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
    return this.offices;
  }

  addOffice(office: Office) {
    return this.firestore.collection('offices').add(office);
  }

  removeOffice(id: any): void {
    let curDoc: any;
    this.firestore
      .collection('offices')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          curDoc = doc.data();
          if (doc.data()) {
            if (curDoc.id == id) {
              console.log('doc found');
              doc.ref.delete();
            }
          }
        });
      });
  }

  updateOffice(office: Office, id: any) {
    let curDoc: any;
    this.firestore
      .collection('offices')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          curDoc = doc.data();
          if (doc.data()) {
            if (curDoc.id == id) {
              console.log('doc found');
              doc.ref.update(office);
            }
          }
        });
      });
  }

  addStaffMember(staffMember: StaffMember, id: string): void {
    // let updatedOffice: Office;
    let curDoc: any;

    let updatedOffice: Office = {
      // id: uuid(),
      name: '',
      location: '',
      email: '???',
      tellNumber: 'xxxx',
      maxNumberOfOccupants: 20,
      color: 'some color',
      staffMembers: [],
    };

    this.firestore
      .collection('offices')
      .get()
      .toPromise()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          curDoc = doc.data();

          if (doc.data()) {
            if (curDoc.id == id) {
              let updatedMembers = [];
              updatedMembers = curDoc.staffMembers;
              updatedMembers.push(staffMember);

              updatedOffice.id = curDoc.id;
              updatedOffice.name = curDoc.name;
              updatedOffice.email = curDoc.email;
              updatedOffice.location = curDoc.location;
              updatedOffice.maxNumberOfOccupants = curDoc.maxNumberOfOccupants;

              updatedOffice.staffMembers = updatedMembers;
              doc.ref.update(updatedOffice);
            }
          }
        });
      });
  }

  removeStaffMember(staffMember: StaffMember, id: string): void {
    // let updatedOffice: Office;
    let curDoc: any;

    let updatedOffice: Office = {
      // id: uuid(),
      name: '',
      location: '',
      email: '???',
      tellNumber: 'xxxx',
      maxNumberOfOccupants: 20,
      color: 'some color',
      staffMembers: [],
    };

    this.firestore
      .collection('offices')
      .get()
      .toPromise()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          curDoc = doc.data();

          if (doc.data()) {
            if (curDoc.id == id) {
              let updatedMembers = [];
              updatedMembers = curDoc.staffMembers;
              // updatedMembers.push(staffMember);

              updatedOffice.id = curDoc.id;
              updatedOffice.name = curDoc.name;
              updatedOffice.email = curDoc.email;
              updatedOffice.location = curDoc.location;
              updatedOffice.maxNumberOfOccupants = curDoc.maxNumberOfOccupants;

              if (updatedMembers.length > 0) {
                //  StaffMember
                let getIndexToDelete = 0;
                for (let i = 0; i <= updatedMembers.length - 1; i++) {
                  let objectToDelete: StaffMember = updatedMembers[i];

                  if (
                    objectToDelete.name == staffMember.name &&
                    objectToDelete.lastname == staffMember.lastname
                  ) {
                    getIndexToDelete = i;
                    break;
                  }
                }

                updatedMembers.splice(getIndexToDelete, 1);

                updatedOffice.staffMembers = updatedMembers;

                doc.ref.update(updatedOffice);
              }
            }
          }
        });
      });
  }

  editStaffMember(newDetails: StaffMember, staffMember: StaffMember, id: string): void{
    // let updatedOffice: Office;
    let curDoc: any;

    let updatedOffice: Office = {
      // id: uuid(),
      name: '',
      location: '',
      email: '???',
      tellNumber: 'xxxx',
      maxNumberOfOccupants: 20,
      color: 'some color',
      staffMembers: [],
    };

    this.firestore
      .collection('offices')
      .get()
      .toPromise()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          curDoc = doc.data();

          if (doc.data()) {
            if (curDoc.id == id) {
              let updatedMembers = [];
              updatedMembers = curDoc.staffMembers;
              // updatedMembers.push(staffMember);

              updatedOffice.id = curDoc.id;
              updatedOffice.name = curDoc.name;
              updatedOffice.email = curDoc.email;
              updatedOffice.location = curDoc.location;
              updatedOffice.maxNumberOfOccupants = curDoc.maxNumberOfOccupants;

              if (updatedMembers.length > 0) {
                //  StaffMember
                let getIndexToDelete = 0;
                for (let i = 0; i <= updatedMembers.length - 1; i++) {
                  let objectToDelete: StaffMember = updatedMembers[i];

                  if (
                    objectToDelete.name == staffMember.name &&
                    objectToDelete.lastname == staffMember.lastname
                  ) {
                    getIndexToDelete = i;
                    break;
                  }
                }

                updatedMembers.splice(getIndexToDelete, 1, newDetails);

                updatedOffice.staffMembers = updatedMembers;

                doc.ref.update(updatedOffice);
              }
            }
          }
        });
      });
  }

  // getOfficeByID(id: string) {
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
  // }
}
