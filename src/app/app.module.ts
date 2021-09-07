import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficesComponent } from './components/offices/offices.component';
import { EditDeletePopUpComponent } from './components/edit-delete-pop-up/edit-delete-pop-up.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Enable HTTP services, to fetch data from a remote server
import { HttpClientModule } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

//firebase imports
// import { list } from '@angular/fire/database';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AddOfficeComponent } from './components/add-office/add-office.component';
import { OfficeViewComponent } from './components/office-view/office-view.component';
import { EditDeleteOfficesPopUpComponent } from './components/edit-delete-offices-pop-up/edit-delete-offices-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficesComponent,
    EditDeletePopUpComponent,
    AddOfficeComponent,
    OfficeViewComponent,
    EditDeleteOfficesPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
