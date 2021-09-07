import { Component, OnInit,  Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-delete-pop-up',
  templateUrl: './edit-delete-pop-up.component.html',
  styleUrls: ['./edit-delete-pop-up.component.css']
})
export class EditDeletePopUpComponent implements OnInit {

  @Output() closePopUEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closePopUp(): void{
    console.log("Emmit")
    this.closePopUEmitter.emit(false)
  }

}
