using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Mapping
{
    class OpportunityMap : IEntityTypeConfiguration<Opportunity>
    {
        public void Configure(EntityTypeBuilder<Opportunity> builder)
        {
            builder.ToTable("DB1_Opportunity");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnName("Name");

            builder.Property(c => c.Description)
              .IsRequired()
              .HasColumnName("Description");

            #region RELATIONSHIPS
            builder.HasMany(x => x.OpportunityTechnologies).WithOne(opportunityTechnology => opportunityTechnology.Opportunity);
            builder.HasMany(x => x.OpportunityApplications).WithOne(opportunityApplication => opportunityApplication.Opportunity);
            #endregion

        }
    }
}
