import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-delete-offices-pop-up',
  templateUrl: './edit-delete-offices-pop-up.component.html',
  styleUrls: ['./edit-delete-offices-pop-up.component.css']
})
export class EditDeleteOfficesPopUpComponent implements OnInit {

  @Output() closePopUEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closePopUp(): void{
    console.log("Emmit")
    this.closePopUEmitter.emit(false)
  }
}
