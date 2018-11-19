﻿using System;
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
    public class OpportunityTechnologyController : DB1ControllerBase<OpportunityTechnologyService, OpportunityTechnology>
    {
        private OpportunityTechnologyService service = new OpportunityTechnologyService();



        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OpportunityTechnology item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                service.Add<OpportunityTechnologyValidator>(item);

                return new ObjectResult(item.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] OpportunityTechnology item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                service.Update<OpportunityTechnologyValidator>(item);

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
                return new ObjectResult(service.Get().Include(x=>x.Opportunity).Include(x => x.Technology));
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

                return new ObjectResult(service.Get().Where(x => x.IdOpportunity == id).Include(x => x.Opportunity).Include(x => x.Technology));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}