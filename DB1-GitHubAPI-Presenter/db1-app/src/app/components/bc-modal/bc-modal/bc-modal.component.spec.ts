import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcModalComponent } from './bc-modal.component';
import { EventEmitter } from '@angular/core';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

describe('BcModalComponent', () => {
  let component: BcModalComponent;
  let fixture: ComponentFixture<BcModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ],
      providers: [
        BsModalService
      ],
      declarations: [ 
        BcModalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
