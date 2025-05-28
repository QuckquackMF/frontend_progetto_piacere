import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRankingComponent } from './call-ranking.component';

describe('CallRankingComponent', () => {
  let component: CallRankingComponent;
  let fixture: ComponentFixture<CallRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallRankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
