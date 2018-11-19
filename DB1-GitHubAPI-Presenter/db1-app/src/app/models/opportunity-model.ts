import { OpportunityTechnologyModel } from './opportunity-technology-model';

export interface OpportunityModel {
  id: number;
  name: string;
  description: string;
  opportunityTechnologies: OpportunityTechnologyModel[];
}
