# airbank-api

## Description
> According to challenge description, this API, using GraphQL, Typescript, Prisma and Postgres, must expose a collection of transactions that can be filtered by date range (start month/end month).

> The file attached was converted from csv to Json using an online tool. This json was used for initial seeding.



---
## Requirements
* node (at least v10)
* docker (to run postgres locally)


---



### Project setup
```
npm install

docker-compose up -d
```


### Prisma migration
```
npm run db:migrate
```


### Before getting started, let's reset our database to make sure that's not already seeded. Don't worry, seed process will run just after resetting
```
npm run db:reset
```

### Starting application
```
npm run dev
```
