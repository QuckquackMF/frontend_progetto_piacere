import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSearchComponent } from './call-search.component';

describe('CallSearchComponent', () => {
  let component: CallSearchComponent;
  let fixture: ComponentFixture<CallSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
