import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Office } from 'src/app/interfaces/office-details/office-details';
import { OfficeService } from 'src/app/services/office.service';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css'],
})
export class AddOfficeComponent implements OnInit {
  name: string = '';
  email: string = '';
  officeTell: string = '';
  address: string = '';
  maxNumberOfOccupants: string = '';
  color: string = '';

  @Input() addNewOfficeParentState?: boolean = false;
  @Output() addNewOfficeState = new EventEmitter<boolean>();


  constructor(private officeService: OfficeService) {}

  ngOnInit(): void {
    console.log("pop-up state: ", this.addNewOfficeParentState)
  }

  saveOffice() {
    let newOffice: Office = {
      id: uuid(),
      name: this.name,
      location: 'some location',
      email: this.email,
      tellNumber: this.officeTell,
      maxNumberOfOccupants: 20,
      color: 'some color',
      staffMembers: [{ name: 'jane', lastname: 'doe' }],
    };
    this.officeService
      .addOffice(newOffice)
      .then((response) => {
        console.log('test add reponse: ', response);
        
      })
      .catch((error) => {
        console.warn('add error:  ', error);
      });
      this.closePopUp()
  }

  closePopUp():void{
    this.addNewOfficeState.emit(false)
  } 
}
