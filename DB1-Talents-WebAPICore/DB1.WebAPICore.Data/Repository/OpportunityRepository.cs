﻿using DB1.WebAPICore.Data.Base;
using DB1.WebAPICore.Domain;
using DB1.WebAPICore.Domain.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Repository
{
    public class OpportunityRepository : DB1RepositoryBase<Opportunity>, IOpportunityRepository
    {
        public OpportunityRepository()
        {
        }
    }
}