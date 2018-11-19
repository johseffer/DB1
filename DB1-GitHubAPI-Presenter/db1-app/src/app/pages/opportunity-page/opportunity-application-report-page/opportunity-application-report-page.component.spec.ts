import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityApplicationReportPageComponent } from './opportunity-application-report-page.component';

describe('OpportunityApplicationReportPageComponent', () => {
  let component: OpportunityApplicationReportPageComponent;
  let fixture: ComponentFixture<OpportunityApplicationReportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityApplicationReportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityApplicationReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
