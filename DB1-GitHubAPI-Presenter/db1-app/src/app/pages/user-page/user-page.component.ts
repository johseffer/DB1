import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  selectedRow: any;
  displayedColumns = ['id', 'login'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public userService: UserService, private router: Router) {

  }

  openUserDetails() {
    this.router.navigate(['/user-detail/', this.selectedRow.login]);
  }

  ngOnInit() {
    const result = new MatTableDataSource<UserModel>();
    const elementsArray = [];
    this.userService.getUsers()
      .then(r => {
        const teste = r as any;
        teste.forEach(element => {
          elementsArray.push({ id: element.id, login: element.login });
        });
        this.dataSource = new MatTableDataSource<UserModel>(elementsArray);
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => {
        alert('Erro ao buscar usuários.');
      });
  }
}
