import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TechnologyService } from '../../service/technology.service';
import { Router } from '@angular/router';
import { TechnologyModel } from '../../models/technology-model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TechnologyFormPageComponent } from './technology-form-page/technology-form-page.component';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit {

  selectedRow: any;
  displayedColumns = ['id', 'name'];
  dataSource: any;
  subscription: any;
  bsModalRef: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public technologyService: TechnologyService, private router: Router, protected $bsModalService: BsModalService) {

  }

  getTechnologies() {
    const result = new MatTableDataSource<TechnologyModel>();
    const elementsArray = [];
    this.technologyService.getTechnologies()
      .then(r => {
        (r as any).forEach(element => {
          elementsArray.push({ id: element.id, name: element.name });
        });
        this.dataSource = new MatTableDataSource<TechnologyModel>(elementsArray);
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => {
        alert('Erro ao buscar tecnologias.');
      });
  }

  refresh() {
    this.getTechnologies();
    this.selectedRow = undefined;
  }

  addTechnology() {
    this.bsModalRef = this.$bsModalService.show(TechnologyFormPageComponent);
    this.subscription = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscription.unsubscribe();
      alert('Registro Incluído com sucesso!');
    });
  }

  editTechnology() {
    const initialState = { entity: this.selectedRow, isEdit: true };
    this.bsModalRef = this.$bsModalService.show(TechnologyFormPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));
    this.subscription = this.bsModalRef.content.close.subscribe(($e) => {
      this.refresh();
      this.subscription.unsubscribe();
      alert('Registro Alterado com sucesso!');
    });
  }


  openTechnologyDetails() {
    const initialState = { entity: this.selectedRow, isDetail: true };
    this.$bsModalService.show(TechnologyFormPageComponent, Object.assign({}, {}, { class: 'modal-sm', initialState }));
  }

  deleteTechnology() {
    this.technologyService.deleteTechnology(this.selectedRow.id)
      .then(result => {
        this.refresh();
        alert('Tecnologia eliminada com Sucesso.');
      })
      .catch(error => {
        this.refresh();
        alert('Erro ao Excluir Tecnologia.');
      });
  }

  ngOnInit() {
    this.getTechnologies();
  }
}
