CREATE TABLE [dbo].[DB1_Opportunity_Application]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Id_Opportunity] INT NOT NULL,	
	[UserName] VARCHAR(100) NOT NULL,
	[UserMail] VARCHAR(100) NOT NULL,
	CONSTRAINT UN_DB1_Opportunity_Application UNIQUE(UserMail),
	FOREIGN KEY (Id_Opportunity) REFERENCES DB1_Opportunity(Id)
)
