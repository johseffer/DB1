using DB1.WebAPICore.Services.Base;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB1.WebAPICore.Microservices.Base
{
    public class DB1ControllerBase<TService, TEntity> : Controller where TEntity : class where TService : class
    {

    }
}
