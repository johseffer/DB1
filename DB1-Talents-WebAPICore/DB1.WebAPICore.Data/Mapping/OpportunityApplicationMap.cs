using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Mapping
{
    class OpportunityApplicationMap : IEntityTypeConfiguration<OpportunityApplication>
    {
        public void Configure(EntityTypeBuilder<OpportunityApplication> builder)
        {
            builder.ToTable("DB1_Opportunity_Application");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.IdOpportunity)
                .IsRequired()
                .HasColumnName("Id_Opportunity");

            builder.Property(c => c.UserName)
                .IsRequired()
                .HasColumnName("UserName");

            builder.Property(c => c.UserMail)
                .IsRequired()
                .HasColumnName("UserMail");

            #region FOREIGN KEYS
            builder.HasOne(x => x.Opportunity)
             .WithMany(x => x.OpportunityApplications)
                 .HasForeignKey(z => z.IdOpportunity);
            //.OnDelete(DeleteBehavior.SetNull);
            #endregion

            #region RELATIONSHIPS
            builder.HasMany(x => x.OpportunityApplicationTechnologies)
                .WithOne(opportunityApplicationTechnology => opportunityApplicationTechnology.OpportunityApplication);
            #endregion
        }
    }
}
