import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedUserInformationComponent } from './fixed-user-information.component';

describe('FixedUserInformationComponent', () => {
  let component: FixedUserInformationComponent;
  let fixture: ComponentFixture<FixedUserInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedUserInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
