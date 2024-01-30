# Todos - Code Test

## Technology
This application uses NextJS and Postgres (with Prisma).


## Getting Started
The best way to run this project is with Docker Compose.

At the root of the project:
1. Run `docker compose up` to run and see logs
1. or run `docker compose up -d` to run only

## Structure
This project includes all frontend, backend, and database code.

### Frontend
The frontend code includes everything except the `./src/api` folder

### Backend
The backend code is in `./src/api`

### Database
The backend code interacts with the database via the ORM prisma.  The prisma code can be found in its folder `./src/prisma`

This is where the db seed file (`seed.ts`) is and the db schema file (`schema.prisma`).


## References
- [Install & Use NextJS](https://nextjs.org/docs/getting-started/installation)
- [Set up Google Material Icons](https://dev.to/sabbirsobhani/google-icons-from-google-fonts-with-nextjs-11pa)
- [Google Material Icons](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:edit:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=edit)
- [Combine state into one object](https://www.freecodecamp.org/news/how-to-build-forms-in-react/)
- [Review HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [ORM Prisma Docs](https://www.prisma.io/docs/getting-started)
- [Prisma in NextJS Examples](https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes/src/pages/api/filterPosts.ts)
- [Docker: How to use postgres, adminer, & node in containers](https://hub.docker.com/_/postgres)

## Extras

### Data Model
I typicaly create an idea of the data modals needed for an application before coding.  [Here is a data modal](https://docs.google.com/drawings/d/1UTzKAbcyrbcMjdFivp7HZZyDQtH8KJqhrUsU35pSmus/edit) for this todo code test.

### Design
Similarly, I typically start applications with a little design work to create an idea of how data will be display and interacted with.  [Here is the design](https://codetestdesign.framer.website/) created for this todo code test.