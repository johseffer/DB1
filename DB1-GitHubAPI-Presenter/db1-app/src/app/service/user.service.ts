import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class UserService {
  data: any;

  constructor(public httpService: HttpService) {

  }

  getUser(username: string) {
    return this.httpService.get(`https://api.github.com/users/${username}`).toPromise();
  }

  getUsers() {
    return this.httpService.get('https://api.github.com/users').toPromise();
  }

  getUserRepos(username: string) {
    return this.httpService.get(`https://api.github.com/users/${username}/repos`).toPromise();
  }


}
