using DB1.WebAPICore.Domain.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DB1.WebAPICore.Domain
{
    public class Technology : DB1EntityBase
    {
        public string Name { get; set; }

        public virtual IList<OpportunityTechnology> TechnologyOpportunities { get; set; }
        
    }
}
