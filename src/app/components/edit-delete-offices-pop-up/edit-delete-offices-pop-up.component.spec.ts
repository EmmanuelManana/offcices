import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteOfficesPopUpComponent } from './edit-delete-offices-pop-up.component';

describe('EditDeleteOfficesPopUpComponent', () => {
  let component: EditDeleteOfficesPopUpComponent;
  let fixture: ComponentFixture<EditDeleteOfficesPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteOfficesPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteOfficesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
