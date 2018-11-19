import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OpportunityTechnologyService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  addOpportunityTechnology(model: any) {
    return this.httpService.post(`http://localhost:62824/api/OpportunityTechnology`, model).toPromise();
  }

  deleteOpportunityTechnology(id: number) {
    return this.httpService.delete(`http://localhost:62824/api/OpportunityTechnology/${id}`).toPromise();
  }

  editOpportunityTechnology(model: any) {
    return this.httpService.put(`http://localhost:62824/api/OpportunityTechnology`, model).toPromise();
  }

  getOpportunityTechnology(id: number) {
    return this.httpService.get(`http://localhost:62824/api/OpportunityTechnology/${id}`).toPromise();
  }

  getOpportunityTechnologies() {
    return this.httpService.get('http://localhost:62824/api/OpportunityTechnology').toPromise();
  }
}
