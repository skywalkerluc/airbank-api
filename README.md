# airbank-api

### Requirements
node (at least v10)
docker (to run postgres locally)

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
