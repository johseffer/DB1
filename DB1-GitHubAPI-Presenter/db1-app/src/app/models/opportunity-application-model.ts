import { OpportunityTechnologyModel } from 'src/app/models/opportunity-technology-model';
import { OpportunityModel } from './opportunity-model';

export interface OpportunityApplicationModel {
  id: number;
  idOpportunity: number;
  opportunity: string;
  userName: string;
  userMail: string;
  opportunityApplicationTechnologies: OpportunityTechnologyModel[];
}
