# node_boilerplate

node boilerplate

npm run prod

my-node-boilerplate/
├── config/
│ ├── configuration/
│ │ ├── development.json
│ │ └── production.json
│ ├── defaultConfig.json
├── scripts/
│ ├── start.sh
├── src/
│ ├── config.js
│ ├── logger.js
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ └── user.js
│ ├── routes/
│ │ └── user.js
│ ├── db/
│ │ └── connection.js
│ └── index.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md

Test Routes:
POST /users: curl -X POST -H "Content-Type: application/json" -d '{"username":"john","email":"john@example.com"}' http://localhost:3000/users
GET /users/1: curl -H "Authorization: Bearer <token>" http://localhost:3000/users/1 (Generate a token manually for testing, e.g., using jsonwebtoken in a script).

# build

npm run prod
npm run dev

docker-compose up --build

=================================================================

# run as a docker this without docker compose file

docker build -t my-node-app .

docker run -d \
 --name my-node-container \
 -p 3000:3000 \
 -e NODE_ENV=production \
 --env-file .env \
 my-node-app

# Database Considerations

docker run -d \
 --name mysql-container \
 -e MYSQL_ROOT_PASSWORD=yourpassword \
 -e MYSQL_DATABASE=myapp \
 -p 3306:3306 \
 mysql:8.0

docker run -d \
 --name my-node-container \
 -p 3000:3000 \
 -e NODE_ENV=production \
 --env-file .env \
 --link mysql-container:mysql \
 my-node-app

docker exec -it mysql-container mysql -uroot -pyourpassword myapp

=======================================

# Full Workflow (No Compose)

docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=myapp -p 3306:3306 mysql:8.0

docker build -t my-node-app .

docker run -d --name my-node-container -p 3000:3000 -e NODE_ENV=production --env-file .env --link mysql-container:mysql my-node-app

# using Docker Compose

docker-compose up --build
docker exec -it my-node-boilerplate_db_1 mysql -uroot -pyourpassword myapp

Run SQL Commands

# text

app_1 | {"level":"info","message":"Server running on port 3000 in production mode","timestamp":"2025-02-26TXX:XX:XX.XXXZ"}

# Test the App

GET a user

curl -H "Authorization: Bearer <token>" http://localhost:3000/users/1

POST a user

curl -X POST -H "Content-Type: application/json" -d '{"username":"john","email":"john@example.com"}' http://localhost:3000/users
