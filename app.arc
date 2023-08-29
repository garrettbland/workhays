@app
workhays

@aws
profile architect # local aws named profile used to deploy from local machine
runtime nodejs18.x
region us-east-2

# Http endpoints
@http
get /v1/jobs
get /v1/contacts
post /v1/contacts
any /v1/*
# post /v1/contacts
# get /
# get /jobs/:jobId
# get /about
# get /contact
# get /privacy
# get /terms
# get /faqs
# get /faqs/:faqId
# any /api/v1/*
# any /*

@plugins
# architect/plugin-typescript
seed-database
cognito
ses
next

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

# Allows lambdas to share code. Automatically gets copied into all functions
# Usage: import { x } from '@architect/shared/<filename>'
@shared