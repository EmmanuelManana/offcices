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
  editOfficePopUp?: boolean = false;
  @Output()   deleteOfficeClosePopUp = new EventEmitter<boolean>();

  popUp?: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("id for office to delete: ", this.id)
    console.log("removeOfficePopUp: ", this.removeOfficePopUp)
  }

 
  editOffice(closePop: boolean): void{
    this.editOfficePopUp = closePop;
    this.popUp = true;
    // if (closePop == true){
    //   this.popUp = true;
    // }else{
    //   this.popUp = false;
    // }
   
  }

  removeOffice(removePopUp: boolean): void{
    this.removeOfficePopUp = removePopUp;
    this.popUp = true;
  }

  // emmitts to offices
  closePopUp(): void {
    this. deleteOfficeClosePopUp.emit(false)
  }


}
