import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityApplicationFormPageComponent } from './opportunity-application-form-page.component';

describe('OpportunityApplicationFormPageComponent', () => {
  let component: OpportunityApplicationFormPageComponent;
  let fixture: ComponentFixture<OpportunityApplicationFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityApplicationFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityApplicationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
