using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB1.WebAPICore.Domain;
using DB1.WebAPICore.Microservices.Base;
using DB1.WebAPICore.Services.Service;
using DB1.WebAPICore.Services.Validator;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Microsoft.EntityFrameworkCore;

namespace DB1.WebAPICore.Microservices.Controllers
{
    [Route("api/[controller]")]
    public class OpportunityController : DB1ControllerBase<OpportunityService, Opportunity>
    {
        private OpportunityService service = new OpportunityService();
        private OpportunityTechnologyService serviceOpportunityTechnology = new OpportunityTechnologyService();
        private OpportunityApplicationService serviceOpportunityApplication = new OpportunityApplicationService();
        private OpportunityApplicationTechnologyService serviceOpportunityApplicationTechnology = new OpportunityApplicationTechnologyService();


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Opportunity item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                var list = item.OpportunityTechnologies;
                item.OpportunityTechnologies = null;

                service.Add<OpportunityValidator>(item);

                list.ToList().ForEach(x =>
                {
                    x.IdOpportunity = item.Id;
                    serviceOpportunityTechnology.Add<OpportunityTechnologyValidator>(x);
                });

                return new ObjectResult(item.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Opportunity item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                item.OpportunityTechnologies.ToList().ForEach(x =>
                                {
                                    if (serviceOpportunityTechnology.Get().Any(y => y.IdOpportunity == x.IdOpportunity && y.IdTechnology == x.IdTechnology))
                                    {
                                        var dbOpportunityTechnology = serviceOpportunityTechnology.Get().SingleOrDefault(y => y.IdOpportunity == x.IdOpportunity && y.IdTechnology == x.IdTechnology);
                                        dbOpportunityTechnology.Points = x.Points;
                                        serviceOpportunityTechnology.Update<OpportunityTechnologyValidator>(dbOpportunityTechnology);
                                    }
                                    else
                                        serviceOpportunityTechnology.Add<OpportunityTechnologyValidator>(x);
                                });

                serviceOpportunityTechnology.Get()
                    .Where(y => !item.OpportunityTechnologies.ToList().Any(z => z.IdTechnology == y.IdTechnology)).ToList()
                    .ForEach(x =>
                    {
                        serviceOpportunityApplicationTechnology.Get().Where(y => y.IdOpportunityTechnology == x.Id).ToList().ForEach(u =>
                        {
                            serviceOpportunityApplicationTechnology.Delete(u.Id);
                        });
                        serviceOpportunityTechnology.Delete(x.Id);
                    });

                service.Update<OpportunityValidator>(item);

                return new ObjectResult(item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                serviceOpportunityTechnology.Get().Where(x => x.IdOpportunity == id).ToList().ForEach(x => serviceOpportunityTechnology.Delete(x.Id));
                serviceOpportunityApplication.Get().Where(x => x.IdOpportunity == id).ToList().ForEach(x => serviceOpportunityApplication.Delete(x.Id));

                service.Delete(id);

                return new NoContentResult();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return new ObjectResult(service.Get().Include(x => x.OpportunityTechnologies).ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                return new ObjectResult(service.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}