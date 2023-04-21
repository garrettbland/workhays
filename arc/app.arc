@app
workhays

@aws
profile architect # local aws named profile used to deploy from local machine
runtime node # sets TS as the the default runtime for your entire project
region us-east-2

@plugins
seed-database
cognito
ses

# Dynamo DB Tables
# Working with dynamo database locally stores data in memory using Dynalite
# Options are available for persistant memory or live database's on AWS
@tables
workhays
  PK *String
  SK **String

# Global Secondary Indexes for Dynamo DB Tables
@tables-indexes
workhays
  GSI1PK *String
  GSI1SK **String
  name GSI1

workhays
  GSI2PK *String
  GSI2SK **String
  name GSI2