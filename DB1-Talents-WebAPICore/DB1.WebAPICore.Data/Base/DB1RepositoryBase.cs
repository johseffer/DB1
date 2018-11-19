using DB1.WebAPICore.Data.Context;
using DB1.WebAPICore.Domain.Base;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DB1.WebAPICore.Data.Base
{
    public class DB1RepositoryBase<T> : IDB1RepositoryBase<T> where T : DB1EntityBase
    {
        private DB1Context context=new DB1Context();

        public void Insert(T obj)
        {
            context.Set<T>().Add(obj);
            context.SaveChanges();
        }

        public void Remove(int? id)
        {
            context.Set<T>().Remove(SelectById(id));
            context.SaveChanges();
        }

        public IQueryable<T> SelectAll()
        {
            return context.Set<T>();
        }

        public T SelectById(int? id)
        {
            return context.Set<T>().Find(id);
        }

        public void Update(T obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
        }
    }
}
