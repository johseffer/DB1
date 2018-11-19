using DB1.WebAPICore.Domain.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DB1.WebAPICore.Domain
{
    public class Opportunity : DB1EntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual IList<OpportunityTechnology> OpportunityTechnologies { get; set; }

        public virtual IList<OpportunityApplication> OpportunityApplications { get; set; }
    }
}
