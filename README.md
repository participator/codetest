# Roaming Hunger Code Test: ‘TODO’ App

*Please read this whole README before starting.*

Welcome to the code test! 

This test is meant to help us get an understanding of your technical knowledge and how you tackle problems. The way you go about finding your solutions and implementing them is just as important to us as the final product. This test should take you about 2 to 4 hours.

When you’re finished with the test, please email us to schedule a code review! We’ll ask for a demo of what you have working as well as have a conversation about how you made what you made. 

## Requirements
Create an application to create, view, update, and destroy ‘todo’ items. The application should be a single page application based in a popular framework (React, Vue, Svelte, or similar) with a backend based which interacts with a SQL or NoSQL style database.

### To begin the code test
* [x] Fork this repository into a public repository on your account

### While working on this, please:
* [x] Commit early and often. We'll likely be following along with your progress.

### Upon completion, please email to us:
* [x] A link to your repository with code in it.

## Front End Requirements

### The default UI should show a list of TODO items, each item needs
* [x] A text description of the todo
* [x] A checkbox to mark the todo as done or undone

### Interactions
* [x] The user should be able to create a new TODO item
* [x] The user should be able to destroy a TODO item
* [x] The user should be able to update the text description of a TODO item

## Backend Requirements

### Interactions to support
* [x] TODOs should be Created, Updated, Listed, Viewed, and Destroyed via REST or graphQL
* [x] TODOs should be stored in your database on the backend. 

## Extra Credit

If you find that you have completed the earlier items with time to spare, please consider adding the following

### Suggestions for improvements
* [ ] Deploy your TODO app to the internet so we can see it in action
* [ ] Test it on Mobile device sizes.
* [ ] Write unit tests for your code.
* [ ] Edit this ReadMe with new suggestions for how to improve this code test

#### Suggestions for improvements
1. Add tooltips for each action icon
1. Make the app responsive to various screen sizes
1. Write tests

## About

### Technology
This application uses NextJS and Postgres (with Prisma).


### Getting Started
The best way to run this project is with Docker Compose.

At the root of the project:
1. Run `docker compose up` to run and see logs
1. or run `docker compose up -d` to run only

### Structure
This project includes all frontend, backend, and database code.

#### Frontend
The frontend code includes everything except the `./app/src/app/api` folder

#### Backend
The backend code is in `./app/src/app/api`

#### Database
The backend code interacts with the database via the ORM prisma.  The prisma code can be found in its folder `./app/src/app/prisma`

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
- [Prisma Generate Client during Build](https://www.prisma.io/docs/orm/prisma-client/deployment/serverless/deploy-to-vercel#:~:text=Generate%20Prisma%20during%20build&text=This%20will%20re%2Dgenerate%20Prisma,missing%20prisma%20in%20your%20dependencies.)

## Extras

### Data Model
I typicaly create an idea of the data modals needed for an application before coding.  [Here is a data modal](https://docs.google.com/drawings/d/1UTzKAbcyrbcMjdFivp7HZZyDQtH8KJqhrUsU35pSmus/edit) for this todo code test.

### Design
Similarly, I typically start applications with a little design work to create an idea of how data will be display and interacted with.  [Here is the design](https://codetestdesign.framer.website/) created for this todo code test.