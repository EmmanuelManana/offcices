import { identifierName } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-delete-offices-pop-up',
  templateUrl: './edit-delete-offices-pop-up.component.html',
  styleUrls: ['./edit-delete-offices-pop-up.component.css']
})
export class EditDeleteOfficesPopUpComponent implements OnInit {

  @Output() closePopUEmitter = new EventEmitter<boolean>();
  @Input() id?: string = '';
  @Input() officeName?: string = ""

  removeOfficePopUp?: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("id for office to delete: ", this.id)
    console.log("removeOfficePopUp: ", this.removeOfficePopUp)
  }

  closePop(){
    console.log("Emmit")
    // this.closePopUEmitter.emit(false)
  }

  editOffice(): void{
    this.removeOfficePopUp = true;
  }

  removeOffice(id: string): void{
    this.removeOfficePopUp = true;
  }


}
