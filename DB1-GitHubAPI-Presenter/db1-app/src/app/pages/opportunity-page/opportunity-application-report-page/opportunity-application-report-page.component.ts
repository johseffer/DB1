import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OpportunityModel } from 'src/app/models/opportunity-model';
import { OpportunityApplicationTechnologyService } from 'src/app/service/opportunity-application-technology.service';
import { OpportunityApplicationService } from '../../../service/opportunity-application.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { OpportunityApplicationModel } from '../../../models/opportunity-application-model';


@Component({
  selector: 'app-opportunity-application-report-page',
  templateUrl: './opportunity-application-report-page.component.html',
  styleUrls: ['./opportunity-application-report-page.component.scss']
})
export class OpportunityApplicationReportPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() entityOpportunity: OpportunityModel;
  @Output() close = new EventEmitter<boolean>(false);

  opportunity = new FormControl('');
  technologiesFormGroup: FormGroup;
  selected: any;

  displayedColumns = ['id', 'userName', 'userMail', 'totalPoints'];
  dataSource: any;

  constructor(
    public opportunityApplicationService: OpportunityApplicationService,
    public opportunityApplicationTechnologyService: OpportunityApplicationTechnologyService,
    public bsModalRef: BsModalRef) { }

  cancel() {
    this.bsModalRef.hide();
  }

  getOpportunityApplications() {
    const result = new MatTableDataSource<OpportunityApplicationModel>();
    const elementsArray = [];
    this.opportunityApplicationService.getOpportunityApplication(this.entityOpportunity.id)
      .then(r => {
        (r as any).forEach(element => {
          elementsArray.push({
            id: element.id,
            idOpportunity: element.idOpportunity,
            userName: element.userName,
            userMail: element.userMail,
            totalPoints: element.totalPoints,
          });
        });
        this.dataSource = new MatTableDataSource<OpportunityApplicationModel>(elementsArray);
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort(x => x.totalPoints);

      })
      .catch(error => {
        alert('Erro ao buscar candidaturas a vaga.');
      });
  }

  ngOnInit() {
    this.getOpportunityApplications();

    if (this.entityOpportunity) {
      this.opportunity.disable();
      this.opportunity.setValue(this.entityOpportunity.name);
    }
  }
}

