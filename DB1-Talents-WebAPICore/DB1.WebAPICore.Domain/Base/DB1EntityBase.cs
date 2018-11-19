using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DB1.WebAPICore.Domain.Base
{
    public class DB1EntityBase
    {
        [Key]
        public int? Id { get; set; }
    }
}
