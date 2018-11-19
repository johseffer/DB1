import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TechnologyService } from '../../../service/technology.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-technology-form-page',
  templateUrl: './technology-form-page.component.html',
  styleUrls: ['./technology-form-page.component.scss']
})
export class TechnologyFormPageComponent implements OnInit {

  @Input() entity: any;
  @Input() isDetail: boolean;
  @Input() isEdit: boolean;
  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  @Output() close = new EventEmitter<boolean>(false);

  constructor(public technologyService: TechnologyService, private builder: FormBuilder, public bsModalRef: BsModalRef) { }

  save() {
    if (this.isEdit) {
      this.technologyService.editTechnology({ id: this.entity.id, name: this.name.value })
        .then(result => {
          this.bsModalRef.hide();
          this.close.emit(true);
        })
        .catch(error => {
          alert('Erro ao salvar registro.');
        });
    } else {
      this.technologyService.addTechnology(this.name.value)
        .then(result => {
          this.bsModalRef.hide();
          this.close.emit(true);
        })
        .catch(error => {
          alert('Erro ao salvar registro.');
        });
    }
  }
  cancel() {
    this.bsModalRef.hide();
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'Digite o nome da tecnologia' : '';
  }

  ngOnInit() {
    if (this.entity) {
      this.name.setValue(this.entity.name);
    }
    if (this.isDetail) {
      this.name.disable();
    }
  }

}
