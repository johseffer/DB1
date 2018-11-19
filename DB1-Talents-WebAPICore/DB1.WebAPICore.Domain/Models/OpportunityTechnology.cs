using DB1.WebAPICore.Domain.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB1.WebAPICore.Domain
{
    public class OpportunityTechnology : DB1EntityBase
    {       

        public int? IdOpportunity { get; set; }
        public virtual Opportunity Opportunity { get; set; }

        public int? IdTechnology { get; set; }
        public virtual Technology Technology { get; set; }

        public virtual IList<OpportunityApplicationTechnology> TechnologyOpportunityApplications { get; set; }

        public int? Points { get; set; }

        [NotMapped]
        public bool Checked { get; set; }
    }
}
