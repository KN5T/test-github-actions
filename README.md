# COMP.SE.610-620-Autumn-2024
Repository for software engineering project course / Autumn 2024

## Setting up

### Environment files

Create new file `.env` in root `/` and copy-paste contents of `/.env.sample`.

### Installing Docker

Install [Docker Desktop](https://www.docker.com/)

Make sure [Docker compose](https://docs.docker.com/compose/install/) is installed (should be if Docker Desktop is installed).

Something about [WSL 2](https://docs.docker.com/desktop/windows/wsl/) for Windows users?

## Running the project in Docker

### Up

Run `docker-compose up` to start the containers or `docker-compose up -d` to run them in the background.

*First time running `docker-compose up` might not work (database not found), so run `docker-compose down` and try `docker-compose up` again.*

To force rebuild run `docker-compose up -d --build --remove-orphans`

### Down

To stop Docker simply run `docker-compose down`.

To stop and remove all images run `docker-compose down --rmi all`

### Other

#### Database volume

A volume `db` is set up for the `mysql` database, this means that it will retain data even if the `mysql` container and image are destroyed. **To completely rebuild the database, delete the `db` volume**.
