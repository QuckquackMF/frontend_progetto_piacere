import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRandomComponent } from './call-random.component';

describe('CallRandomComponent', () => {
  let component: CallRandomComponent;
  let fixture: ComponentFixture<CallRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
