import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNamesComponent } from './call-names.component';

describe('CallNamesComponent', () => {
  let component: CallNamesComponent;
  let fixture: ComponentFixture<CallNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallNamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
