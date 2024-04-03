# Next Ecommerce Demo

Brutally simple e-commerce demo with homepage, product list, product details and cart pages.

## Technologies being used

- [MongoDb](https://www.sqlite.org/index.html)
- [Prisma.io](https://www.prisma.io/) ORM
- [Next.js 14](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Material UI](https://mui.com/)

## Notes

- This repo uses `Git flow`
- This repo is composed of the following branches
  - `feature/ecommerce-setup`
  - `feature/common`
  - `feature/product-list`
  - `feature/product-detail`
  - `feature/cart`
  - `develop`
  - `main`

Ech branch served its purpose when developing the pages and features avaialable (product detail, product list, cart).
The `feature` branches were merged into `develop` and `main` once their respective development was done.
I decided to keep them (hence not to delete them) for demonstration purposes.
Use `main` to start this project locally.

## Requirements

Make sure to have installed the [Latest Stable Version of Node](https://nodejs.org/en) on your machine. This is to avoid incompatibilty and/or conflict issues among the needed dependencies to run the app

## Install dependenceis

Run the command `npm i` at the root folder level

## Configure db connection string

Create an `.env` file in the project root and configure a connection string to mongo db by following the [official format shown in Mongo Db documentation](https://www.mongodb.com/docs/manual/reference/connection-string/), reported below.

The documentation might be more updated than this README at moment of reading so please, make sure to consult it.

```
mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]
```

## Start Prisma client

Run `npx prisma generate`

## Ready to go

Run `npm run dev` to startup local Next.js server (usually setup on port 3000)
