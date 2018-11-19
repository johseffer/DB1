CREATE TABLE [dbo].[DB1_Opportunity_Application_Technology] (
    [Id]                         INT IDENTITY (1, 1) NOT NULL,
    [Id_Opportunity_Application] INT NOT NULL,
    [Id_Opportunity_Technology]  INT NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UN_DB1_Opportunity_Application_Technology] UNIQUE NONCLUSTERED ([Id_Opportunity_Application] ASC, [Id_Opportunity_Technology] ASC),
    FOREIGN KEY ([Id_Opportunity_Application]) REFERENCES [dbo].[DB1_Opportunity_Application] ([Id]),
    FOREIGN KEY ([Id_Opportunity_Technology]) REFERENCES [dbo].[DB1_Opportunity_Technology] ([Id])
);

