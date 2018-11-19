import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Db1PageComponent } from './ui/db1-page/db1-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { PageTopComponent } from './ui/page-top/page-top.component';
import { PageContentComponent } from './ui/page-content/page-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [Db1PageComponent, PageTopComponent, PageContentComponent],
  exports: [Db1PageComponent, PageTopComponent, PageContentComponent, MaterialModule]
})
export class ComponentsModule { }
