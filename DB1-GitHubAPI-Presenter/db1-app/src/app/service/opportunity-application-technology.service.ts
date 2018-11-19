import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OpportunityApplicationTechnologyService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  addOpportunityApplicationTechnology(model: any) {
    return this.httpService.post(`http://localhost:62824/api/OpportunityApplicationTechnology`, model).toPromise();
  }

  deleteOpportunityApplicationTechnology(id: number) {
    return this.httpService.delete(`http://localhost:62824/api/OpportunityApplicationTechnology/${id}`).toPromise();
  }

  editOpportunityApplicationTechnology(model: any) {
    return this.httpService.put(`http://localhost:62824/api/OpportunityApplicationTechnology`, model).toPromise();
  }

  getOpportunityApplicationTechnology(id: number) {
    return this.httpService.get(`http://localhost:62824/api/OpportunityApplicationTechnology/${id}`).toPromise();
  }

  getOpportunities() {
    return this.httpService.get('http://localhost:62824/api/OpportunityApplicationTechnology').toPromise();
  }
}
