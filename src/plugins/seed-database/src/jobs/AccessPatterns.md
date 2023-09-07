# Jobs Access Patterns

| Pattern                                      | Index | Condition                                    |
| -------------------------------------------- | ----- | -------------------------------------------- |
| Get Active Jobs, Sort by Expires             | GSI_1 | PK = ACTIVE#JOB, SK >= $todaysDate, Limit 10 |
| Get Active Jobs by Industry, Sort by Expires | Main  | ?                                            |
| Get Job                                      | ?     | PK = {id}                                    |
| Get Active Jobs by Employer                  | ?     | ?                                            |
| Get All Jobs by Employer                     | ?     | ?                                            |

## Table Indexes

#### Get Active Jobs

Get active jobs, sort by expires in DESC order, and limit. Used for the public page.

**Index**: GSI_1
**Condition**: GSI_1_PK = ACTIVE#JOB, SK >= $todaysDate, Limit 10

#### Get Active Jobs by Industry

Get active jobs by industry, sort by expires in DESC order, and limit. Used for public page.

**Index**: GSI_3
**Condition**:

#### Get Job

Get job by id. This would be for both public and authenticated users. If the user passes in a valid auth token verifying that they are the employer, then return the job. If no auth token is passed, then it would be treated as a public query and would return a 404 if the job was inactive.

**Index**: Main
**Condition** PK = [id]

## Examples

Active Job Listing

```js
{
  PK: 'abc123',
  SK: 'JOB',
  GSI_1_PK: 'JOB#ACTIVE',
  GSI_1_SK: '2023-09-03',
  GSI_2_PK: 'EMPLOYER#efg123',
  GSI_2_PK: 'JOB#ACTIVE',
  GSI_3_PK: 'Healthcare', // <- Maybe?
  GSI_3_SK: '2023-09-03' // <- Maybe?
}
```

### Main

-   PK (PK)
-   SK (SK)
-   GSI1_PK
-   GSI1_SK
-   GSI2_PK
-   GSI2_SK

## GSI1 Index

-   GSI1_PK (PK)
-   GSI1_SK (SK)
-   PK
-   SK
-   GSI2_PK
-   GSI2_SK

## GSI2 Index

-   GSI2_PK (PK)
-   GSI2_SK (SK)
-   PK
-   SK
-   GSI1_PK
-   GSI1_SK
