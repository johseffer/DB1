using DB1.WebAPICore.Domain.Base;
using System;
using System.ComponentModel.DataAnnotations;

namespace DB1.WebAPICore.Domain
{
    public class User : DB1EntityBase
    {
        public string Name { get; set; }
    }
}
