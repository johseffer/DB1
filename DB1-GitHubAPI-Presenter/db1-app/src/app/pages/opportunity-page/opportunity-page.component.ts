import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OpportunityService } from '../../service/opportunity.service';
import { Router } from '@angular/router';
import { OpportunityModel } from '../../models/opportunity-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OpportunityFormPageComponent } from 'src/app/pages/opportunity-page/opportunity-form-page/opportunity-form-page.component';
import { EventEmitter } from 'events';
// tslint:disable-next-line:max-line-length
import { OpportunityApplicationFormPageComponent } from 'src/app/pages/opportunity-application-page/opportunity-application-form-page/opportunity-application-form-page.component';
// tslint:disable-next-line:max-line-length
import { OpportunityApplicationReportPageComponent } from './opportunity-application-report-page/opportunity-application-report-page.component';

@Component({
  selector: 'app-opportunity-page',
  templateUrl: './opportunity-page.component.html',
  styleUrls: ['./opportunity-page.component.scss']
})
export class OpportunityPageComponent implements OnInit {

  selectedRow: any;
  displayedColumns = ['id', 'name', 'description'];
  dataSource: any;
  bsModalRef: any;

  subscription: any;
  subscriptionApplication: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public opportunityService: OpportunityService, private router: Router, protected $bsModalService: BsModalService) {

  }

  getOpportunities() {
    const result = new MatTableDataSource<OpportunityModel>();
    const elementsArray = [];
    this.opportunityService.getOpportunities()
      .then(r => {
        (r as any).forEach(element => {
          elementsArray.push({
            id: element.id, name: element.name,
            description: element.description,
            opportunityTechnologies: element.opportunityTechnologies
          });
        });
        this.dataSource = new MatTableDataSource<OpportunityModel>(elementsArray);
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => {
        alert('Erro ao buscar vagas.');
      });
  }

  refresh() {
    this.getOpportunities();
    this.selectedRow = undefined;
  }

  addOpportunityApplication() {

    const initialState = { entityOpportunity: this.selectedRow };
    this.bsModalRef = this.$bsModalService.show(OpportunityApplicationFormPageComponent,
      Object.assign({}, {}, { class: 'modal-sm', initialState }));

    this.subscriptionApplication = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscriptionApplication.unsubscribe();
      alert('Registro Incluído com sucesso!');
    });
  }

  addOpportunity() {
    this.bsModalRef = this.$bsModalService.show(OpportunityFormPageComponent);
    this.subscription = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscription.unsubscribe();
      alert('Registro Incluído com sucesso!');
    });
  }

  editOpportunity() {
    const initialState = { entity: this.selectedRow, isEdit: true };
    this.bsModalRef = this.$bsModalService.show(OpportunityFormPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));

    this.subscription = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscription.unsubscribe();
      alert('Registro Alterado com sucesso!');
    });
  }


  openOpportunityDetails() {
    const initialState = { entity: this.selectedRow, isDetail: true };
    this.$bsModalService.show(OpportunityFormPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));
  }

  openOpportunityApplications() {
    const initialState = { entityOpportunity: this.selectedRow, isDetail: true };
    this.$bsModalService.show(OpportunityApplicationReportPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));
  }

  deleteOpportunity() {
    this.opportunityService.deleteOpportunity(this.selectedRow.id)
      .then(result => {
        this.refresh();
        alert('Vaga eliminada com Sucesso.');
      })
      .catch(error => {
        this.refresh();
        alert('Erro ao Excluir vaga.');
      });
  }

  ngOnInit() {
    this.getOpportunities();
  }
}
