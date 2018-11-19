import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Db1PageComponent } from './db1-page.component';

describe('Db1PageComponent', () => {
  let component: Db1PageComponent;
  let fixture: ComponentFixture<Db1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Db1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Db1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
