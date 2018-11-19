import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityApplicationPageComponent } from './opportunity-application-page.component';

describe('ApplicationPageComponent', () => {
  let component: OpportunityApplicationPageComponent;
  let fixture: ComponentFixture<OpportunityApplicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityApplicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
