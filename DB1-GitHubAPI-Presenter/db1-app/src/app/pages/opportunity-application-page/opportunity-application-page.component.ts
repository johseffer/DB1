import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OpportunityApplicationService } from '../../service/opportunity-application.service';
import { Router } from '@angular/router';
import { OpportunityApplicationModel } from 'src/app/models/opportunity-application-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OpportunityApplicationFormPageComponent } from './opportunity-application-form-page/opportunity-application-form-page.component';

@Component({
  selector: 'app-opportunity-application-page',
  templateUrl: './opportunity-application-page.component.html',
  styleUrls: ['./opportunity-application-page.component.scss']
})
export class OpportunityApplicationPageComponent implements OnInit {

  selectedRow: any;
  displayedColumns = ['id', 'opportunity', 'userName', 'userMail'];
  dataSource: any;

  bsModalRef: any;
  subscription: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public opportunityApplicationService: OpportunityApplicationService,
    private router: Router,
    protected $bsModalService: BsModalService) {

  }
  refresh() {
    this.getOpportunityApplications();
    this.selectedRow = undefined;
  }

  getOpportunityApplications() {
    const result = new MatTableDataSource<OpportunityApplicationModel>();
    const elementsArray = [];
    this.opportunityApplicationService.getOpportunityApplications()
      .then(r => {
        (r as any).forEach(element => {
          elementsArray.push({
            id: element.id,
            idOpportunity: element.idOpportunity,
            opportunity: element.opportunity ? element.opportunity.name : '',
            userName: element.userName,
            userMail: element.userMail
          });
        });

        this.dataSource = new MatTableDataSource<OpportunityApplicationModel>(elementsArray);
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => {
        alert('Erro ao buscar candidaturas a vaga.');
      });
  }

  editOpportunityApplication() {
    const initialState = { entity: this.selectedRow, isEdit: true };
    this.bsModalRef = this.$bsModalService.show(OpportunityApplicationFormPageComponent,
      Object.assign({}, {}, { class: 'modal-sm', initialState }));

    this.subscription = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscription.unsubscribe();
      alert('Registro Alterado com sucesso!');
    });
  }


  openOpportunityApplicationDetails() {
    const initialState = { entity: this.selectedRow, isDetail: true };
    this.$bsModalService.show(OpportunityApplicationFormPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));
  }

  deleteOpportunityApplication() {
    this.opportunityApplicationService.deleteOpportunityApplication(this.selectedRow.id)
      .then(result => {
        this.refresh();
        alert('Aplicação a vaga eliminada com Sucesso.');
      })
      .catch(error => {
        this.refresh();
        alert('Erro ao Excluir aplicação a vaga.');
      });
  }

  ngOnInit() {
    this.getOpportunityApplications();
  }
}

