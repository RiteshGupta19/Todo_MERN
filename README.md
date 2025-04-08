# A simple MERN stack application

## Create a network for the docker containers

```bash
docker network create demo
Build the client
bash
Copy
Edit
cd mern/frontend
docker build -t mern-frontend .
Run the client
bash
Copy
Edit
docker run --name=frontend --network=demo -d -p 5173:5173 mern-frontend
Verify the client is running
Open your browser and type http://localhost:5173

Run the mongodb container
bash
Copy
Edit
docker run --network=demo --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongo:latest
pgsql
Copy
Edit

