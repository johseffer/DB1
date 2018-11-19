import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UserDetailModel } from 'src/app/models/user-detail-model';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {

  username: string;
  private sub: any;

  id: string;
  profileUrl: string;
  creationDate: string;

  displayedColumns = ['id', 'name', 'url'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private route: ActivatedRoute, private _location: Location) { }

  back() {
    this._location.back();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];

      this.userService.getUser(this.username)
        .then(r => {
          const entity = r as any;
          this.id = entity.id;
          this.profileUrl = entity.html_url;
          this.creationDate = new Date(entity.created_at).toLocaleString();

          this.userService.getUserRepos(this.username)
            .then(repo => {
              const elementsArray = [];
              const teste = repo as any;
              teste.forEach(element => {
                elementsArray.push({ id: element.id, name: element.name, url: element.html_url });
              });
              this.dataSource = new MatTableDataSource<UserDetailModel>(elementsArray);
              this.dataSource.paginator = this.paginator;
            })
            .catch(error => {
              alert('Erro ao buscar repositórios do usuário.');
            });
        })
        .catch(error => {
          alert('Erro ao buscar usuário.');
        });
    });
  }
}
