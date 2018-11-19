import { OpportunityModel } from './opportunity-model';

export interface ApplicationModel {
  id: number;
  idOpportunity: number;
  opportunity: OpportunityModel;
  userName: string;
  userMail: string;
}
