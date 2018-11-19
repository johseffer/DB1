import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityPageComponent } from './opportunity-page.component';

describe('OpportunityPageComponent', () => {
  let component: OpportunityPageComponent;
  let fixture: ComponentFixture<OpportunityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
