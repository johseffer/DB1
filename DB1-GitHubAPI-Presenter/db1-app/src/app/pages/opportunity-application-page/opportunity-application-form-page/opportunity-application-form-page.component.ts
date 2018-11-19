import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TechnologyModel } from 'src/app/models/technology-model';
import { TechnologyService } from 'src/app/service/technology.service';
import { OpportunityApplicationTechnologyService } from 'src/app/service/opportunity-application-technology.service';
import { OpportunityApplicationModel } from '../../../models/opportunity-application-model';
import { OpportunityApplicationService } from '../../../service/opportunity-application.service';
import { OpportunityTechnologyService } from '../../../service/opportunity-technology.service';
import { OpportunityModel } from 'src/app/models/opportunity-model';


@Component({
  selector: 'app-opportunity-application-form-page',
  templateUrl: './opportunity-application-form-page.component.html',
  styleUrls: ['./opportunity-application-form-page.component.scss']
})
export class OpportunityApplicationFormPageComponent implements OnInit {

  @Input() entity: OpportunityApplicationModel;
  @Input() entityOpportunity: OpportunityModel;
  @Input() isDetail: boolean;
  @Input() isEdit: boolean;
  @Output() close = new EventEmitter<boolean>(false);

  technologies = [];
  opportunityApplicationTechnologies = [];
  userName = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  opportunity = new FormControl('');
  userMail = new FormControl('', [Validators.required, Validators.maxLength(500)]);

  technologiesFormGroup: FormGroup;
  selected: any;

  constructor(
    public opportunityApplicationService: OpportunityApplicationService,
    public opportunityTechnologyService: OpportunityTechnologyService,
    public opportunityApplicationTechnologyService: OpportunityApplicationTechnologyService,
    private builder: FormBuilder,
    public bsModalRef: BsModalRef) { }

  save() {
    if (this.isEdit) {
      this.opportunityApplicationService.editOpportunityApplication({
        id: this.entity.id,
        idOpportunity: this.entity.idOpportunity,
        userName: this.userName.value,
        userMail: this.userMail.value,
        opportunityApplicationTechnologies: this.getCheckedTecnologies()
      })
        .then(result => {
          this.bsModalRef.hide();
          this.close.emit(true);
        })
        .catch(error => {
          alert('Erro ao salvar registro.');
        });
    } else {
      this.opportunityApplicationService.addOpportunityApplication({
        userName: this.userName.value,
        userMail: this.userMail.value,
        idOpportunity: this.entityOpportunity.id,
        opportunityApplicationTechnologies: this.getCheckedTecnologies()
      })
        .then(result => {
          this.bsModalRef.hide();
          this.close.emit(true);
        }).catch(error => {
          alert('Erro ao salvar registro.');
        });
    }
  }

  cancel() {
    this.bsModalRef.hide();
  }



  getErrorMessageName() {
    return this.userName.hasError('required') ? 'Digite o nome do candidato' : '';
  }

  getErrorMessageMail() {
    return this.userMail.hasError('required') ? 'Digite o email do candidato' : '';
  }

  onChange(event) {
    const technologies = <FormArray>this.technologiesFormGroup.get('technologies') as FormArray;

    if (event.checked) {
      technologies.push(new FormControl(event.source.value));
      this.technologies.find(x => x.id === event.source.value).checked = true;
    } else {
      const i = technologies.controls.findIndex(x => x.value === event.source.value);
      technologies.removeAt(i);
      this.technologies.find(x => x.id === event.source.value).checked = false;
    }
  }

  getCheckedTecnologies() {
    const technologiesArray = this.technologiesFormGroup.value.technologies as Array<any>;
    const checkedTechnologies = [];
    technologiesArray.forEach(x => {
      if (this.entity) {
        checkedTechnologies.push({ idOpportunityTechnology: x, idOpportunityApplication: this.entity.id });
      } else {
        checkedTechnologies.push({ idOpportunityTechnology: x });
      }

    });
    return checkedTechnologies;
  }

  getTechnologys() {


    this.opportunityTechnologyService
      .getOpportunityTechnology(this.entity.idOpportunity)
      .then(opportunityTechnologyResult => {

        this.opportunityApplicationTechnologyService
          .getOpportunityApplicationTechnology(this.entity.id)
          .then(opportunityApplicationTechnologyResult => {

            (opportunityTechnologyResult as any).forEach(opportunityTechnology => {
              let checked = false;
              (opportunityApplicationTechnologyResult as any).forEach(opportunityTechnologyApplication => {
                if (opportunityTechnologyApplication.idOpportunityTechnology === opportunityTechnology.id) {
                  checked = true;
                  const checkedTechnologies = <FormArray>this.technologiesFormGroup.get('technologies') as FormArray;
                  checkedTechnologies.push(new FormControl(opportunityTechnology.id));
                }
              });

              this.technologies.push({
                id: opportunityTechnology.id,
                name: opportunityTechnology.technology.name,
                checked: checked
              });
            });
          })
          .catch(error => {
            alert('Erro ao buscar tecnologias da vaga.');
          });

      })
      .catch(error => {
        alert('Erro ao buscar tecnologias.');
      });

  }

  ngOnInit() {
    this.technologiesFormGroup = this.builder.group({
      technologies: this.builder.array([])
    });

    if (this.entity) {
      this.userName.setValue(this.entity.userName);
      this.userMail.setValue(this.entity.userMail);
      this.opportunity.setValue(this.entity.opportunity);
      this.getTechnologys();
    } else {
      this.opportunityTechnologyService.getOpportunityTechnologies()
        .then(r => {
          (r as any).forEach(element => {
            this.technologies.push({ id: element.id, name: element.technology.name, checked: false });
          });
        })
        .catch(error => {
          alert('Erro ao buscar tecnologias da vaga.');
        });
    }

    if (this.isDetail) {
      this.userName.disable();
      this.userMail.disable();
    }

    this.opportunity.disable();
    if (this.entityOpportunity) {
      this.opportunity.setValue(this.entityOpportunity.name);
    }
  }
}

