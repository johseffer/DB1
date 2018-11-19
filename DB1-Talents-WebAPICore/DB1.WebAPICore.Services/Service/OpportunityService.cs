using DB1.WebAPICore.Domain;
using DB1.WebAPICore.Domain.Interfaces.Service;
using DB1.WebAPICore.Services.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Services.Service
{
    public class OpportunityService : DB1ServiceBase<Opportunity>, IOpportunityService
    {
        public OpportunityService()
        {

        }
    }
}
