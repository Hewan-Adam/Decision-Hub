# DecisionHub Backend

NestJS backend API for DecisionHub.

## Structure

- `src/modules` - feature modules
- `src/common` - shared guards, filters, pipes, decorators, DTOs
- `prisma` - database schema and seed data

## Setup

1. `npm install`
2. `cp .env.example .env`
3. `npm run prisma:generate`
4. `npm run prisma:migrate`
