using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Mapping
{
    class OpportunityTechnologyMap : IEntityTypeConfiguration<OpportunityTechnology>
    {
        public void Configure(EntityTypeBuilder<OpportunityTechnology> builder)
        {
            builder.ToTable("DB1_Opportunity_Technology");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.IdOpportunity)
                .IsRequired()
                .HasColumnName("Id_Opportunity");

            builder.Property(c => c.IdTechnology)
              .IsRequired()
              .HasColumnName("Id_Technology");

            builder.Property(c => c.Points)
            .IsRequired()
            .HasColumnName("Points");

            #region FOREIGN KEYS
            builder.HasOne(x => x.Opportunity)
             .WithMany(x => x.OpportunityTechnologies)
                 .HasForeignKey(z => z.IdOpportunity);
            //.OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Technology)
            .WithMany(x => x.TechnologyOpportunities)
                .HasForeignKey(z => z.IdTechnology);
            //.OnDelete(DeleteBehavior.Cascade);
            #endregion

            builder.HasMany(x => x.TechnologyOpportunityApplications).WithOne(opportunityApplicationTechnology => opportunityApplicationTechnology.OpportunityTechnology);
         
        }
    }
}
