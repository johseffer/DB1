using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DB1.WebAPICore.Domain.Base
{
    public interface IDB1RepositoryBase<T> where T : DB1EntityBase
    {
        void Insert(T obj);

        void Update(T obj);

        void Remove(int? id);

        T SelectById(int? id);

        IQueryable<T> SelectAll();
    }
}
