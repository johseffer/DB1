using DB1.WebAPICore.Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB1.WebAPICore.Services.Validator
{
    public class OpportunityApplicationValidator : AbstractValidator<OpportunityApplication>
    {

        public OpportunityApplicationValidator()
        {
            RuleFor(c => c.UserName)
                .Length(1, 100)
                .NotEmpty().WithMessage("É necessário informar o nome.")
                .NotNull().WithMessage("É necessário informar o nome");

            RuleFor(c => c.UserMail)
               .Length(1, 100)
               .NotEmpty().WithMessage("É necessário informar o email de contato.")
               .NotNull().WithMessage("É necessário informar o email de contato.");
        }

    }
}
