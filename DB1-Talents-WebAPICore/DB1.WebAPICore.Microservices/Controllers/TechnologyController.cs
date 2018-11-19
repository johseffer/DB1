using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB1.WebAPICore.Domain;
using DB1.WebAPICore.Microservices.Base;
using DB1.WebAPICore.Services.Service;
using DB1.WebAPICore.Services.Validator;
using Microsoft.AspNetCore.Mvc;

namespace DB1.WebAPICore.Microservices.Controllers
{
    [Route("api/[controller]")]
    public class TechnologyController : DB1ControllerBase<TechnologyService, Technology>
    {
        private TechnologyService service = new TechnologyService();



        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Technology item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                service.Add<TechnologyValidator>(item);

                return new ObjectResult(item.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Technology item)
        {
            try
            {
                if (item == null)
                    return NotFound();

                service.Update<TechnologyValidator>(item);

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
                return new ObjectResult(service.Get());
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