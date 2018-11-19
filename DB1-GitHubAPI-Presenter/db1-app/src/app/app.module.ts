import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from 'src/app/pages/pages.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpService } from './service/http/http.service';
import { UserService } from './service/user.service';
import { TechnologyService } from './service/technology.service';
import { HttpHandler, HttpClientModule } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './service/http/error-handler.interceptor';
import { UserDetailPageComponent } from './pages/user-page/user-detail-page/user-detail-page.component';
import { TechnologyPageComponent } from 'src/app/pages/technology-page/technology-page.component';
import { OpportunityPageComponent } from 'src/app/pages/opportunity-page/opportunity-page.component';
import { OpportunityService } from './service/opportunity.service';
import { OpportunityApplicationPageComponent } from './pages/opportunity-application-page/opportunity-application-page.component';
import { ApplicationService } from 'src/app/service/application.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BcModalModule } from './components/bc-modal';
import { OpportunityTechnologyService } from './service/opportunity-technology.service';
import { OpportunityApplicationService } from './service/opportunity-application.service';
import { OpportunityApplicationTechnologyService } from 'src/app/service/opportunity-application-technology.service';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'users', component: UserPageComponent },
  { path: 'user-detail/:username', component: UserDetailPageComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'technologies', component: TechnologyPageComponent },
  { path: 'opportunities', component: OpportunityPageComponent },
  { path: 'applications', component: OpportunityApplicationPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    PagesModule,
    HttpClientModule,
    BcModalModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ComponentsModule],
  providers: [
    HttpService,
    ErrorHandlerInterceptor,
    UserService,
    TechnologyService,
    OpportunityService,
    ApplicationService,
    OpportunityTechnologyService,
    OpportunityApplicationService,
    OpportunityApplicationTechnologyService,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
