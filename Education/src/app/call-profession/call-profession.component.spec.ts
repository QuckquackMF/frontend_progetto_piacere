import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallProfessionComponent } from './call-profession.component';

describe('CallProfessionComponent', () => {
  let component: CallProfessionComponent;
  let fixture: ComponentFixture<CallProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallProfessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
