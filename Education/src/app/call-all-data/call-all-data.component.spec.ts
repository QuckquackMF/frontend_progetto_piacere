import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAllDataComponent } from './call-all-data.component';

describe('CallAllDataComponent', () => {
  let component: CallAllDataComponent;
  let fixture: ComponentFixture<CallAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAllDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
