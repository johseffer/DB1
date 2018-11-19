using DB1.WebAPICore.Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Services.Validator
{
    public class OpportunityValidator : AbstractValidator<Opportunity>
    {

        public OpportunityValidator()
        {
            RuleFor(c => c.Name)
                .Length(1, 100)
                .NotEmpty().WithMessage("É necessário informar o nome.")
                .NotNull().WithMessage("É necessário informar o nome");

            RuleFor(c => c.Description)
                .Length(1, 500)
                .NotEmpty().WithMessage("É necessário informar o nome.")
                .NotNull().WithMessage("É necessário informar o nome");
        }

    }
}
