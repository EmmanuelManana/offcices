import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/interfaces/office-details/office-details';
import { OfficeService } from 'src/app/services/office.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
})
export class OfficesComponent implements OnInit {
  // offices: Office[] = [];
  actionMenu: boolean = false;
  selectedOffice?: Office;
  closePopUp: boolean = false;

  offices?: Observable<any[]>;

  constructor(private officeService: OfficeService) {}

  ngOnInit(): void {
    this.getOffices();
  }

  onSelect(selectedOffice: Office): void {
    this.selectedOffice = selectedOffice;
    this.setActionMenu();
  }

  getOffices(): void {
    this.offices = this.officeService.getOffices();
    // this.officeService
    //   .getOffices()
    //   .subscribe((offices) => (this.offices = offices));
  }

  setActionMenu(): void {
    if (this.actionMenu === false) {
      this.actionMenu = true;
    } else {
      this.actionMenu = false;
    }
  }

  
  // setActionMenu(closePopUp: boolean): void {
  //   this.actionMenu = closePopUp;
  //  }

  addOffice() {
    if ( this.closePopUp === false) {
      this.closePopUp = true;
    } else {
      this.closePopUp = false;
    }
  }


  // closePopUp prop as an emmitter from child
  closeOffice(closePopUp: boolean){
    this.closePopUp = closePopUp;
  }
}
