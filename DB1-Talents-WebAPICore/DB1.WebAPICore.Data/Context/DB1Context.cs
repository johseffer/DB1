using DB1.WebAPICore.Data.Mapping;
using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace DB1.WebAPICore.Data.Context
{
    class DB1Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Opportunity> Opportunities { get; set; }
        public DbSet<OpportunityTechnology> OpportunityTechnologies { get; set; }
        public DbSet<OpportunityApplication> OpportunityApplications { get; set; }
        public DbSet<OpportunityApplicationTechnology> OpportunityApplicationTechnologies { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDb;User ID=sa;Password=becomex;Database=Database");            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(new UserMap().Configure);
            modelBuilder.Entity<Technology>(new TechnologyMap().Configure);
            modelBuilder.Entity<Opportunity>(new OpportunityMap().Configure);
            modelBuilder.Entity<OpportunityTechnology>(new OpportunityTechnologyMap().Configure);
            modelBuilder.Entity<OpportunityApplication>(new OpportunityApplicationMap().Configure);
            modelBuilder.Entity<OpportunityApplicationTechnology>(new OpportunityApplicationTechnologyMap().Configure);
        }
    }
}

