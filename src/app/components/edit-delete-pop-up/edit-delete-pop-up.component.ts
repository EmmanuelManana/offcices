import { Component, OnInit,  Output, Input , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-delete-pop-up',
  templateUrl: './edit-delete-pop-up.component.html',
  styleUrls: ['./edit-delete-pop-up.component.css']
})
export class EditDeletePopUpComponent implements OnInit {

  @Output() closePopUEmitter = new EventEmitter<boolean>();

  popUp?: boolean = false;

  editStuffPopUp?: boolean = false;
  removeStuffPopUp?: boolean = false;

  @Input() selectedMember?: any;

  constructor() { }

  ngOnInit(): void {
    console.log(' selectedMember in edit-delete pop Up: ', this.selectedMember)
  }

  closePopUp(): void{
    // this.closePopUEmitter.emit(false)
  }

  editStaff(editStuffPopUp: boolean): void{
    this.editStuffPopUp = editStuffPopUp;

    this.popUp = true;

    // console.log("Emmit false")
    // this.closePopUEmitter.emit(false)
  }

  removeOfficePopUp(removeStuffPopUp: boolean) :void{
    this.removeStuffPopUp = removeStuffPopUp;
    this.popUp = true;
    // console.log("Emmit")
    // this.closePopUEmitter.emit(false)
  }

}
