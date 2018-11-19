using DB1.WebAPICore.Data.Base;
using DB1.WebAPICore.Domain.Base;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DB1.WebAPICore.Services.Base
{
    public class DB1ServiceBase<T> : IDB1ServiceBase<T> where T : DB1EntityBase
    {

        private DB1RepositoryBase<T> repository = new DB1RepositoryBase<T>();

        public T Add<V>(T obj) where V : AbstractValidator<T>
        {
            Validate(obj, Activator.CreateInstance<V>());
            repository.Insert(obj);
            return obj;
        }

        public void Delete(int? id) => repository.Remove(id);

        public void DeleteOnSubmit(int? id) => repository.Remove(id);

        public IQueryable<T> Get() => repository.SelectAll();

        public T GetById(int? id) => repository.SelectById(id);

        public T Update<V>(T obj) where V : AbstractValidator<T>
        {
            Validate(obj, Activator.CreateInstance<V>());
            repository.Update(obj);
            return obj;
        }

        private void Validate(T obj, AbstractValidator<T> validator)
        {
            if (obj == null)
                throw new Exception("Registros não detectados!");

            validator.ValidateAndThrow(obj);
        }

    }
}
