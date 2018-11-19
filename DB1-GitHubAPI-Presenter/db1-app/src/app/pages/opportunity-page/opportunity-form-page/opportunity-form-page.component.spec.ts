import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityFormPageComponent } from './opportunity-form-page.component';

describe('OpportunityFormPageComponent', () => {
  let component: OpportunityFormPageComponent;
  let fixture: ComponentFixture<OpportunityFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
