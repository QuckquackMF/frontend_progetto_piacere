import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDegreeComponent } from './call-degree.component';

describe('CallDegreeComponent', () => {
  let component: CallDegreeComponent;
  let fixture: ComponentFixture<CallDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallDegreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
