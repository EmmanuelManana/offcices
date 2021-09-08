import { Component, OnInit, Input } from '@angular/core';
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
  
  officeId: any;

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    console.log("removeOfficePopUp => ", this.removeOfficePopUpChild)
    console.log("Id from offices: ", this.id)
    this.officeId = this.id;
  }

  removeOffice(): void {
    console.log("trying to delete", this.officeId)
    this.officeService.removeOffice(this.id);
  }

}
