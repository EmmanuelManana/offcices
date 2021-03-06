import { Component, OnInit, Input } from '@angular/core';
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
  // this is for testing purposes
  PopUp: boolean = false;

  @Input() editRemoveOfficePopUp?: boolean = false;

  offices?: Observable<any[]>;

  constructor(private officeService: OfficeService) {}

  ngOnInit(): void {
    this.getOffices();
  }

  getOffices(): void {
    this.offices = this.officeService.getOffices();
    // this.officeService
    //   .getOffices()
    //   .subscribe((offices) => (this.offices = offices));
  }

  addOffice() {
    if (this.closePopUp === false) {
      this.closePopUp = true;
    } else {
      this.closePopUp = false;
    }
  }

  setActionMenu(popUp: boolean): void {
    this.actionMenu = popUp;
    // this.editRemoveOfficePopUp = popUp;
  }

  onSelect(selectedOffice: Office): void {
    this.selectedOffice = selectedOffice;

    if (this.PopUp == false) {
      this.PopUp = true;
    } else {
      this.PopUp = false;
    }
    this.setActionMenu(true);
  }

  // closePopUp prop as an emmitter from child
  closeOffice(closePopUp: boolean) {
    this.closePopUp = closePopUp;
  }

  boxPopUp(bool: boolean) {
    this.PopUp = bool;
  }
}
