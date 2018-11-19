import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OpportunityApplicationService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  addOpportunityApplication(model: any) {
    return this.httpService.post(`http://localhost:62824/api/OpportunityApplication`, model).toPromise();
  }

  deleteOpportunityApplication(id: number) {
    return this.httpService.delete(`http://localhost:62824/api/OpportunityApplication/${id}`).toPromise();
  }

  editOpportunityApplication(model: any) {
    return this.httpService.put(`http://localhost:62824/api/OpportunityApplication`, model).toPromise();
  }

  getOpportunityApplication(id: number) {
    return this.httpService.get(`http://localhost:62824/api/OpportunityApplication/${id}`).toPromise();
  }

  getOpportunityApplications() {
    return this.httpService.get('http://localhost:62824/api/OpportunityApplication').toPromise();
  }
}
