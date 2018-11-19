import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OpportunityService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  addOpportunity(model: any) {
    return this.httpService.post(`http://localhost:62824/api/Opportunity`, model).toPromise();
  }

  deleteOpportunity(id: number) {
    return this.httpService.delete(`http://localhost:62824/api/Opportunity/${id}`).toPromise();
  }

  editOpportunity(model: any) {
    return this.httpService.put(`http://localhost:62824/api/Opportunity`, model).toPromise();
  }

  getOpportunity(id: number) {
    return this.httpService.get(`http://localhost:62824/api/Opportunity/${id}`).toPromise();
  }

  getOpportunities() {
    return this.httpService.get('http://localhost:62824/api/Opportunity').toPromise();
  }
}
