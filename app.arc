@app
workhays

@aws
profile architect # local aws named profile used to deploy from local machine
runtime typescript # sets TS as the the default runtime for your entire project
region us-east-2

# Http endpoints
@http
get /
get /jobs/:jobId
get /about
get /contact
get /privacy
get /terms
get /faqs
get /faqs/:faqId
any /api/v1/* # API v1. Express app or fastify or something
any /* # Catchall - 404

# Defines static files that will be uploaded to s3
# prune will automatically remove assets from S3 bucket 
# not found in the static folder set below
@static
folder public
prune true

@plugins
architect/plugin-typescript
seed-database
cognito
ses
tailwindcss
parcel

# Typescript esbuild config location
@typescript
esbuild-config environment/esbuild-config.js
base-runtime nodejs18.x # Set the Lambda base runtime to Node.js 18

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

# Automatically copy the contents of src/views into all GET lambdas
@views

# Automatically scaffold resources that do not exist
@create
autocreate true

# Sandbox settings
@sandbox
livereload true