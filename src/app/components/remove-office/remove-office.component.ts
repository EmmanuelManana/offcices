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
    this.officeId = this.id;
  }

  removeOffice(): void {
    this.officeService.removeOffice(this.id);
  }

}
