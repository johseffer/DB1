using DB1.WebAPICore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Data.Mapping
{
    class TechnologyMap : IEntityTypeConfiguration<Technology>
    {
        public void Configure(EntityTypeBuilder<Technology> builder)
        {
            builder.ToTable("DB1_Technology");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnName("Name");

            #region RELATIONSHIPS
            builder.HasMany(x => x.TechnologyOpportunities).WithOne(opportunityTechnology => opportunityTechnology.Technology);
            #endregion

        }
    }
}
