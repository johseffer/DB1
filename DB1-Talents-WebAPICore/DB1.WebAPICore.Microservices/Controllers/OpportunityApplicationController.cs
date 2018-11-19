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

namespace DB1.WebAPICore.Microservices.Controllers
{
    [Route("api/[controller]")]
    public class OpportunityApplicationController : DB1ControllerBase<OpportunityApplicationService, OpportunityApplication>
    {
        private TechnologyService technologyService = new TechnologyService();
        private OpportunityTechnologyService opportunityTechnologyService = new OpportunityTechnologyService();
        private OpportunityApplicationService service = new OpportunityApplicationService();
        private OpportunityApplicationTechnologyService serviceApplicationTechnology = new OpportunityApplicationTechnologyService();

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OpportunityApplication item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                var list = item.OpportunityApplicationTechnologies;
                item.OpportunityApplicationTechnologies = null;

                service.Add<OpportunityApplicationValidator>(item);

                foreach (var technology in list)
                {
                    technology.IdOpportunityApplication = item.Id;
                    serviceApplicationTechnology.Add<OpportunityApplicationTechnologyValidator>(technology);
                }

                return new ObjectResult(item.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] OpportunityApplication item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                item.OpportunityApplicationTechnologies.ToList().ForEach(x =>
                {
                    if (!serviceApplicationTechnology.Get().Any(y => y.IdOpportunityTechnology == x.IdOpportunityTechnology && y.IdOpportunityApplication == x.IdOpportunityApplication))
                        serviceApplicationTechnology.Add<OpportunityApplicationTechnologyValidator>(x);
                });

                opportunityTechnologyService.Get()
                    .Where(ot => !item.OpportunityApplicationTechnologies.ToList().Any(z => z.IdOpportunityTechnology == ot.Id)).ToList()
                    .ForEach(x =>
                    {
                        serviceApplicationTechnology.Get().Where(y => y.IdOpportunityTechnology == x.Id).ToList().ForEach(u =>
                        {
                            serviceApplicationTechnology.Delete(u.Id);
                        });
                    });

                service.Update<OpportunityApplicationValidator>(item);

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

                serviceApplicationTechnology.Get().Where(x => x.IdOpportunityApplication == id).ToList().ForEach(x => serviceApplicationTechnology.Delete(x.Id));

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
                return new ObjectResult(service.Get().Include(x => x.Opportunity));
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

                var result = service.Get().Where(x => x.IdOpportunity == id);
                result.Include(x => x.OpportunityApplicationTechnologies).ToList().ForEach(x =>
                  {
                      x.TotalPoints = 0;
                      x.OpportunityApplicationTechnologies.ToList().ForEach(y =>
                      {
                          var opportunityTechnology = opportunityTechnologyService.GetById(y.IdOpportunityTechnology);
                          x.TotalPoints += opportunityTechnology.Points;
                      });

                  });
                return new ObjectResult(result.OrderByDescending(x => x.TotalPoints));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}