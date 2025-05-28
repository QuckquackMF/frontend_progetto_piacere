import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHomeComponent } from './call-home.component';

describe('CallHomeComponent', () => {
  let component: CallHomeComponent;
  let fixture: ComponentFixture<CallHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
