# [Backend-Project](https://github.com/DamienAndDustinBackend/backend-project/tree/main)
![build-test-lint](https://github.com/DamienAndDustinBackend/backend-project/actions/workflows/build-test-lint.yaml/badge.svg?branch=main)

## Technology Stack

### Databases
[sqlite](golang-jwt/jwt)
[mysql](https://www.mysql.com/)

### Languages
[go](http://golang.org/)

### Libraries
[gin](https://gin-gonic.com/en/docs/testing/)
[testify](https://github.com/stretchr/testify)
[google/uuid](https://github.com/google/uuid)
[gorm](https://gorm.io/)
[golang-jwt/jwt](https://github.com/golang-jwt/jwt)
[go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)
[mattn/go-sqlite3](https://github.com/mattn/go-sqlite3)
[net/http](https://pkg.go.dev/net/http)

## Endpoints

### Files
GET /files

### Single File
GET /file/id
* returns the file

* DELETE /file/id

POST /file/id

PUT /file/id

### tags
GET /tags
POST /tags
PUT /tags
DELETE /tags

### Files by tag
GET /files/tag/<tag>

file types are tags

### Files by user
GET /files/user/<user_id>

### Return format
{"success": "", "error": "", data: ""}

## References

https://gobyexample.com/

https://go.dev/doc/tutorial/web-service-gin

https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design

https://gin-gonic.com/en/docs/testing/

https://gobyexample.com/testing-and-benchmarking

# [Frontend-Project](https://github.com/DamienAndDustinBackend/frontend-project/edit/main/README.md)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

