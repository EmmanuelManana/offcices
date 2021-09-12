import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStaffMemberComponent } from './remove-staff-member.component';

describe('RemoveStaffMemberComponent', () => {
  let component: RemoveStaffMemberComponent;
  let fixture: ComponentFixture<RemoveStaffMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStaffMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
