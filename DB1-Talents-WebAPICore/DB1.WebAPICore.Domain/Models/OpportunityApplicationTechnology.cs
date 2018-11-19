using DB1.WebAPICore.Domain.Base;
using System;
using System.ComponentModel.DataAnnotations;

namespace DB1.WebAPICore.Domain
{
    public class OpportunityApplicationTechnology : DB1EntityBase
    {
        public int? IdOpportunityApplication { get; set; }
        public virtual OpportunityApplication OpportunityApplication { get; set; }

        public int? IdOpportunityTechnology { get; set; }
        public virtual OpportunityTechnology OpportunityTechnology { get; set; }        
    }
}
