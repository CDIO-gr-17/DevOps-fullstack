## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/install/) (for managing multi-container Docker applications)
- [Node.js V18](https://nodejs.org/en/download/) (for the React frontend)
- [NVM](https://github.com/nvm-sh/nvm) (for managing Node.js versions, optional but recommended)
- [.NET SDK V8](https://dotnet.microsoft.com/download) (for the .NET backend)


## Running fullstack app using:
`docker-compose up --build`
Or to abort if one image fails:
`docker-compose up --build --abort-on-container-exit`


## Manually run test for backend whith
`dotnet test`