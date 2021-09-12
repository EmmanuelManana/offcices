import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Office } from 'src/app/interfaces/office-details/office-details';
import { OfficeService } from 'src/app/services/office.service';
import { v1 as uuid } from 'uuid';


@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.css']
})
export class UpdateOfficeComponent implements OnInit {

  name: string = '';
  email: string = '';
  officeTell: string = '';
  address: string = '';
  maxNumberOfOccupants: string = '';
  color: string = '';

  @Input() addNewOfficeParentState?: boolean = false;
  @Output() addNewOfficeState = new EventEmitter<boolean>();
  @Output() removeOffice = new EventEmitter<boolean>();

  @Input() id?:string = '';


  constructor(private  officeService: OfficeService ) { }

  ngOnInit(): void {
  }

  updateOffice(){
    let newOffice: Office = {
      id: uuid(),
      name: this.name,
      location: 'some location',
      email: this.email,
      tellNumber: this.officeTell,
      maxNumberOfOccupants: 20,
      color: 'some color',
      staffMembers: [{ name: 'jane', lastname: 'doe' }], // default members to test with
    };

    this.officeService.updateOffice(newOffice, this.id)
  }

  closePopUp():void{
    console.log("emmit test")
    this.addNewOfficeState.emit(false)
  }

  removeOfficePopUp(): void{
    this.removeOffice.emit(false)
  }

}
