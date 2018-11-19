import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class ApplicationService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  getApplication(id: number) {
    return this.httpService.get(`http://localhost:62824/api/OpportunityApplication/${id}`).toPromise();
  }

  getApplications() {
    return this.httpService.get('http://localhost:62824/api/OpportunityApplication').toPromise();
  }
}
