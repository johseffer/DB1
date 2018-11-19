import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserPageComponent } from './user-page/user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailPageComponent } from './user-page/user-detail-page/user-detail-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { OpportunityPageComponent } from './opportunity-page/opportunity-page.component';
import { OpportunityApplicationPageComponent } from './opportunity-application-page/opportunity-application-page.component';
import { TechnologyFormPageComponent } from './technology-page/technology-form-page/technology-form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityFormPageComponent } from './opportunity-page/opportunity-form-page/opportunity-form-page.component';
// tslint:disable-next-line:max-line-length
import { OpportunityApplicationFormPageComponent } from 'src/app/pages/opportunity-application-page/opportunity-application-form-page/opportunity-application-form-page.component';
// tslint:disable-next-line:max-line-length
import { OpportunityApplicationReportPageComponent } from './opportunity-page/opportunity-application-report-page/opportunity-application-report-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TechnologyFormPageComponent,
    OpportunityFormPageComponent,
    OpportunityApplicationFormPageComponent,
    OpportunityApplicationReportPageComponent
  ],
  declarations: [
    HomePageComponent,
    UserPageComponent,
    PageNotFoundComponent,
    UserDetailPageComponent,
    TechnologyPageComponent,
    OpportunityPageComponent,
    OpportunityApplicationPageComponent,
    TechnologyFormPageComponent,
    OpportunityFormPageComponent,
    OpportunityApplicationFormPageComponent,
    OpportunityApplicationReportPageComponent
  ]
})
export class PagesModule { }
