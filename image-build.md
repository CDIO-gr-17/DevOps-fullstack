name: Build Docker Image
on:
push:
branches: - main
jobs:
build:
name: push docker image to docker hub
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v2 - name: login to docker hub
id: docker-hub
env:
username: ${{secrets.HUB_USER}}
password: ${{secrets.HUB_PASSWORD}}
run: |
docker login -u $username -p $password - name: build the frontend docker image
id: build-frontend-docker-image
run: |
ls -la
docker build Frontend -f Frontend/Dockerfile -t holmst33n/kunsthavn:frontend-latest - name: push the frontend docker image
id: push-frontend-docker-image
run: docker push ${{secrets.HUB_USER}}/kunsthavn:frontend-latest - name: build the backend docker image
id: build-backend-docker-image
run: |
docker build Backend -f Backend/Dockerfile -t holmst33n/kunsthavn:backend-latest - name: push the backend docker image
id: push-backend-docker-image
run: docker push ${{secrets.HUB_USER}}/kunsthavn:backend-latest

If i want to avoid injecting the file in docker-compsoe: - name: Set up environment variables
run: |
if [ "${{ github.ref }}" == "refs/heads/main" ]; then
cp .env.prod .env
else
cp .env.dev .env
fi

When running two differnet files export file before docker-composing:
export $(grep -v '^#' .env.dev | xargs)
docker-compose --env-file .env.dev up --build
