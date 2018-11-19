CREATE TABLE [dbo].[DB1_Opportunity_Technology]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Id_Opportunity] INT NOT NULL,
	[Id_Technology] INT NOT NULL,
	[Points] INT NULL,	
	CONSTRAINT UN_DB1_Opportunity_Technology UNIQUE (Id_Opportunity,Id_Technology),
	FOREIGN KEY (Id_Opportunity) REFERENCES DB1_Opportunity(Id),
	FOREIGN KEY (Id_Technology) REFERENCES DB1_Technology(Id)
)
