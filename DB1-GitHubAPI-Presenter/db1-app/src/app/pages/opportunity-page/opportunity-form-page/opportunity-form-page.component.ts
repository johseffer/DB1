import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { OpportunityService } from '../../../service/opportunity.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TechnologyModel } from 'src/app/models/technology-model';
import { TechnologyService } from 'src/app/service/technology.service';
import { OpportunityTechnologyService } from 'src/app/service/opportunity-technology.service';
import { OpportunityModel } from '../../../models/opportunity-model';


@Component({
  selector: 'app-opportunity-form-page',
  templateUrl: './opportunity-form-page.component.html',
  styleUrls: ['./opportunity-form-page.component.scss']
})
export class OpportunityFormPageComponent implements OnInit {

  @Input() entity: OpportunityModel;
  @Input() isDetail: boolean;
  @Input() isEdit: boolean;
  @Output() close = new EventEmitter<boolean>(false);

  technologies = [];
  opportunityTechnologies = [];
  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  description = new FormControl('', [Validators.required, Validators.maxLength(500)]);

  technologiesFormGroup: FormGroup;
  selected: any;

  constructor(
    public opportunityService: OpportunityService,
    public technologyService: TechnologyService,
    public opportunityTechnologyService: OpportunityTechnologyService,
    private builder: FormBuilder,
    public bsModalRef: BsModalRef) { }

  save() {
    if (this.isEdit) {
      this.opportunityService.editOpportunity({
        id: this.entity.id,
        name: this.name.value,
        description: this.description.value,
        opportunityTechnologies: this.getCheckedTecnologies()
      })
        .then(result => {
          this.bsModalRef.hide();
          this.close.emit(true);
        })
        .catch(error => {
          alert('Erro ao salvar registro.');
        });
    } else {
      this.opportunityService.addOpportunity({
        name: this.name.value,
        description: this.description.value,
        opportunityTechnologies: this.getCheckedTecnologies()
      })
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

  getCheckedTecnologies() {
    const technologiesArray = this.technologiesFormGroup.value.technologies as Array<any>;
    const checkedTechnologies = [];
    technologiesArray.forEach(x => {
      if (this.entity) {
        checkedTechnologies.push({
          // idOpportunityTechnology: x,
          idTechnology: x,
          idOpportunity: this.entity.id,
          points: this.opportunityTechnologies.find(y => y.idTechnology === x).points
        });
      } else {
        checkedTechnologies.push({ idTechnology: x });
      }

    });
    return checkedTechnologies;
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'Digite o título da vaga' : '';
  }

  getErrorMessageDescription() {
    return this.description.hasError('required') ? 'Digite a descrição da vaga' : '';
  }

  onChangePoints(event, id) {
    this.opportunityTechnologies.find(x => x.idTechnology === id).points = event.currentTarget.value;
  }

  onChange(event) {
    const technologies = <FormArray>this.technologiesFormGroup.get('technologies') as FormArray;

    if (event.checked) {
      technologies.push(new FormControl(event.source.value));
      this.technologies.find(x => x.id === event.source.value).checked = true;
      if (this.entity) {
        this.opportunityTechnologies.push({ idOpportunity: this.entity.id, idTechnology: event.source.value, points: 0 });
      } else {
        this.opportunityTechnologies.push({ idTechnology: event.source.value, points: 0 });
      }
    } else {
      const i = technologies.controls.findIndex(x => x.value === event.source.value);
      technologies.removeAt(i);
      this.technologies.find(x => x.id === event.source.value).checked = false;

    }
  }

  getTechnologys() {
    this.technologyService.getTechnologies()
      .then(r => {
        (r as any).forEach(element => {
          let checked = false;
          let points = 0;
          this.entity.opportunityTechnologies.forEach(item => {
            if (element.id === item.idTechnology) {
              checked = true;
              points = item.points ? item.points : 0;
              const checkedTechnologies = <FormArray>this.technologiesFormGroup.get('technologies') as FormArray;
              checkedTechnologies.push(new FormControl(element.id));
              this.opportunityTechnologies.push(item);
            }
          });
          if (!this.isDetail || (this.isDetail && checked)) {
            this.technologies.push({ id: element.id, idOpportunity: this.entity.id, name: element.name, checked: checked, points: points });
          }
        });
      })
      .catch(error => {
        alert('Erro ao buscar tecnologias da vaga');
      });
  }

  ngOnInit() {
    this.technologiesFormGroup = this.builder.group({
      technologies: this.builder.array([])
    });

    if (this.entity) {
      this.name.setValue(this.entity.name);
      this.description.setValue(this.entity.description);
      this.getTechnologys();
    } else {
      this.technologyService.getTechnologies()
        .then(r => {
          (r as any).forEach(element => {
            this.technologies.push({ id: element.id, name: element.name, checked: false, points: 0 });
          });
        })
        .catch(error => {
          alert('Erro ao buscar tecnologias.');
        });
    }

    if (this.isDetail) {
      this.name.disable();
      this.description.disable();
    }
  }
}

