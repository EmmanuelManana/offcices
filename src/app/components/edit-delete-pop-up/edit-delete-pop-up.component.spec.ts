import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePopUpComponent } from './edit-delete-pop-up.component';

describe('EditDeletePopUpComponent', () => {
  let component: EditDeletePopUpComponent;
  let fixture: ComponentFixture<EditDeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeletePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
