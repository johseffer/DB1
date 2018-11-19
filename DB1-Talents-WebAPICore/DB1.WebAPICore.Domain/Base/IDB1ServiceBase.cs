using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DB1.WebAPICore.Domain.Base
{

    public interface IDB1ServiceBase<T> where T : DB1EntityBase
    {
        T Add<V>(T obj) where V : AbstractValidator<T>;

        T Update<V>(T obj) where V : AbstractValidator<T>;

        void Delete(int? id);

        T GetById(int? id);

        IQueryable<T> Get();

    }
}
