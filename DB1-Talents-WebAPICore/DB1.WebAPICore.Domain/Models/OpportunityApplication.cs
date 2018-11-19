using DB1.WebAPICore.Domain.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB1.WebAPICore.Domain
{
    public class OpportunityApplication : DB1EntityBase
    {
        public int? IdOpportunity { get; set; }
        public Opportunity Opportunity { get; set; }

        public string UserName { get; set; }
        public string UserMail { get; set; }

        [NotMapped]
        public int? TotalPoints { get; set; }

        public virtual IList<OpportunityApplicationTechnology> OpportunityApplicationTechnologies { get; set; }
    }
}
