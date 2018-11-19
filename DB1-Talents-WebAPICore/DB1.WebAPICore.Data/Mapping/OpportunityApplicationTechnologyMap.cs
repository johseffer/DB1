using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Mapping
{
    class OpportunityApplicationTechnologyMap : IEntityTypeConfiguration<OpportunityApplicationTechnology>
    {
        public void Configure(EntityTypeBuilder<OpportunityApplicationTechnology> builder)
        {
            builder.ToTable("DB1_Opportunity_Application_Technology");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.IdOpportunityApplication)
                .IsRequired()
                .HasColumnName("Id_Opportunity_Application");

            builder.Property(c => c.IdOpportunityTechnology)
                .IsRequired()
                .HasColumnName("Id_Opportunity_Technology");

            #region FOREIGN KEYS
            builder.HasOne(x => x.OpportunityApplication)
             .WithMany(x => x.OpportunityApplicationTechnologies)
                 .HasForeignKey(z => z.IdOpportunityApplication);
            //.OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.OpportunityTechnology)
            .WithMany(x => x.TechnologyOpportunityApplications)
                .HasForeignKey(z => z.IdOpportunityTechnology);
            #endregion
        }
    }
}
