import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffMemberComponent } from './edit-staff-member.component';

describe('EditStaffMemberComponent', () => {
  let component: EditStaffMemberComponent;
  let fixture: ComponentFixture<EditStaffMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStaffMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
