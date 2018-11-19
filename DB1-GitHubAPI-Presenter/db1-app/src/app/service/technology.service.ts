import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class TechnologyService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  addTechnology(name: string) {
    return this.httpService.post(`http://localhost:62824/api/Technology`, { name: name }).toPromise();
  }

  deleteTechnology(id: number) {
    return this.httpService.delete(`http://localhost:62824/api/Technology/${id}`).toPromise();
  }

  editTechnology(model: any) {
    return this.httpService.put(`http://localhost:62824/api/Technology`, model).toPromise();
  }

  getTechnology(id: number) {
    return this.httpService.get(`http://localhost:62824/api/Technology/${id}`).toPromise();
  }

  getTechnologies() {
    return this.httpService.get('http://localhost:62824/api/Technology').toPromise();
  }
}
