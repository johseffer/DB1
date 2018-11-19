import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFormPageComponent } from './technology-form-page.component';

describe('TechnologyFormPageComponent', () => {
  let component: TechnologyFormPageComponent;
  let fixture: ComponentFixture<TechnologyFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
