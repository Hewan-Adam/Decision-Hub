# DecisionHub

<<<<<<< HEAD
A production-ready community platform for collaborative decision making.

## Project Structure

- `decisionhub-backend/` - NestJS backend API
- `decisionhub-frontend/` - Next.js frontend app

## Next Steps

1. Implement backend API.
2. Implement frontend app.
=======
> A modern community-driven decision-making platform where people ask for advice, vote on polls, discuss options, and make informed decisions.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Overview

DecisionHub is a full-stack web application that enables users to create polls, seek community opinions, vote on decisions, and participate in meaningful discussions.

Instead of making important choices alone, users can leverage the wisdom of the community through voting, explanations, comments, and personalized recommendations.

The platform is built using modern technologies and follows industry-standard architecture suitable for real-world production deployment.

---

# Features

## Authentication

- User Registration
- Secure Login
- Logout
- JWT Authentication
- Refresh Tokens
- Email Verification
- Forgot Password
- Password Reset
- Role-Based Authorization

---

## Decision Management

Users can create decision polls including:

- Title
- Description
- Category
- Tags
- 2–6 Voting Options
- Optional Image
- Poll Expiration Date

Example:

```
Which laptop should I buy?

Options:
• MacBook Air M3
• Lenovo ThinkPad
• Dell XPS
```

---

## Voting System

- One vote per user
- Update vote before poll expires
- Live vote percentages
- Vote counts
- Poll expiration handling

---

## Vote Explanations

Users can explain why they selected a specific option.

Example:

> "I chose ThinkPad because it's durable, upgradeable, and has excellent Linux support."

---

## Comments

- Nested comments
- Replies
- Edit comments
- Delete comments
- Like comments

---

## Categories

- Technology
- Education
- Career
- Finance
- Business
- Travel
- Food
- Health
- Shopping
- Lifestyle

---

## Search & Filtering

Search by:

- Decision Title
- Category
- Tags

Sort by:

- Latest
- Trending
- Most Votes
- Most Comments

---

## User Profiles

Each profile contains:

- Profile Photo
- Bio
- Decisions Created
- Comments
- Votes
- Followers
- Following
- Reputation Score

---

## Notifications

Receive notifications when:

- Someone comments
- Someone votes
- Someone follows you
- Your decision starts trending

---

## Bookmarks

Save interesting decisions for later viewing.

---

## Reporting System

Users can report:

- Spam
- Harassment
- Inappropriate Content

Moderators review reports before taking action.

---

## Admin Dashboard

Administrators can manage:

- Users
- Moderators
- Categories
- Reports

Analytics include:

- Active Users
- New Users
- Total Decisions
- Total Votes
- Trending Categories

---

# Tech Stack

## Backend

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- Passport
- bcrypt
- class-validator
- Swagger
- dotenv

---

## Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Axios
- React Hook Form
- Zod

---

# Project Structure

```
DecisionHub
│
├── decisionhub-backend
│   ├── prisma
│   ├── src
│   ├── test
│   ├── .env.example
│   └── README.md
│
└── decisionhub-frontend
    ├── app
    ├── components
    ├── hooks
    ├── lib
    ├── services
    ├── types
    ├── public
    └── README.md
```

---

# Database Models

- User
- Profile
- Decision
- Option
- Vote
- Comment
- Category
- Notification
- Bookmark
- Follow
- Report
- Role

---

# Backend Architecture

The backend follows the standard NestJS modular architecture.

Each feature module includes:

- Controller
- Service
- DTOs
- Validation
- Guards
- Prisma Integration

Additional features include:

- Global Validation Pipe
- Exception Filters
- Environment Variables
- Swagger Documentation
- Pagination
- Error Handling
- Clean Service Layer

---

# Frontend Features

Pages:

- Landing Page
- Login
- Register
- Home Feed
- Decision Details
- Create Decision
- Edit Decision
- User Profile
- Notifications
- Bookmarks
- Moderator Dashboard
- Admin Dashboard

UI Features:

- Responsive Design
- Dark Mode
- Light Mode
- Beautiful Cards
- Infinite Scrolling
- Loading Skeletons
- Toast Notifications
- Empty States

---

# Bonus Features

- AI-generated discussion summaries
- Trending algorithm
- Real-time updates with WebSockets
- Docker
- Docker Compose
- Prisma Seed
- GitHub Actions CI/CD
- ESLint
- Prettier
- Environment Templates

---

# Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/decisionhub.git

cd decisionhub
```

---

## Backend

```bash
cd decisionhub-backend

npm install
```

Create a `.env` file.

```env
DATABASE_URL=

JWT_SECRET=

JWT_REFRESH_SECRET=

PORT=3000
```

Run Prisma migrations.

```bash
npx prisma migrate dev
```

Seed the database.

```bash
npx prisma db seed
```

Start the server.

```bash
npm run start:dev
```

Swagger documentation:

```
http://localhost:3000/api
```

---

## Frontend

```bash
cd decisionhub-frontend

npm install
```

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Run the application.

```bash
npm run dev
```

Open:

```
http://localhost:3001
```

---

# Development Workflow

1. Generate the folder structure
2. Build the backend modules
3. Configure PostgreSQL and Prisma
4. Implement authentication
5. Develop REST APIs
6. Build frontend pages
7. Connect APIs
8. Add real-time functionality
9. Dockerize the application
10. Deploy

---

# API Documentation

Interactive API documentation is available through Swagger.

```
http://localhost:3000/api
```

---

# Future Improvements

- OAuth Login (Google & GitHub)
- Push Notifications
- Recommendation Engine
- AI Decision Assistant
- Mobile Application
- Public API
- Advanced Analytics
- Multi-language Support

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# License

This project is licensed under the MIT License.

---

# Author

Developed as a production-ready full-stack application using **NestJS**, **Next.js**, **PostgreSQL**, and **Prisma**, following clean architecture and modern software engineering best practices.
>>>>>>> 184dec8c7a22045fccdd835e46e8b75c6a521b7f
