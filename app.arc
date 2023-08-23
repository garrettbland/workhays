@app
workhays

@aws
profile architect # local aws named profile used to deploy from local machine
runtime node
region us-east-2

# Http endpoints
@http
get /v1
get /v1/jobs
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

# Typescript esbuild config location
# @typescript
# base-runtime nodejs18.x # Set the Lambda base runtime to Node.js 18

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

# Automatically run arc init to create boilerplate Lambda handlers for new resources
@create
autocreate true