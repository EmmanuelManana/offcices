import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-remove-office',
  templateUrl: './remove-office.component.html',
  styleUrls: ['./remove-office.component.css']
})
export class RemoveOfficeComponent implements OnInit {

  @Input() id?:string = '';
  @Input() removeOfficePopUpChild?: boolean = false;
  @Input() officeName?: string = '';

  @Output() deleteOfficeClosePopUp = new  EventEmitter<boolean>();
  @Output() updateParentClosePopUp = new  EventEmitter<boolean>();
  
  officeId: any;

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeId = this.id;
  }

  removeOffice(): void {
    this.officeService.removeOffice(this.id);
  }

  closePop(){
    this.deleteOfficeClosePopUp.emit(false)
    this.updateParentClosePopUp.emit(false)
  }

}
