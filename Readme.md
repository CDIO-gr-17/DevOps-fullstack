## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/install/) (for managing multi-container Docker applications)
- [Node.js V18](https://nodejs.org/en/download/) (for the React frontend)
- [NVM](https://github.com/nvm-sh/nvm) (for managing Node.js versions, optional but recommended)
- [.NET SDK V8](https://dotnet.microsoft.com/download) (for the .NET backend)

## Start with

`cd frontend` & `npm install`
Remember to make sure the frontend will compile with npm run build before pushing to dev

## When developing for frontend

I would recommend just using `npm run dev` for and live changes
My understanding is that only when you need communications with backend etc. you need to use the following:

## Running fullstack app in dev mode (new):

`make dev`

## Running fullstack app using(old):

`docker-compose up --build -d`

## Manually run tests for backend with:

`dotnet test`

## Manually run tests for frontend with:

`npm test` or `npm vitest`
