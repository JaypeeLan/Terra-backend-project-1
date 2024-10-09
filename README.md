GET /api/v1/users
POST /api/v1/users
GET /api/v1/users/:id
PUT /api/v1/users/:id
DELETE /api/v1/users/:id

<!-- ------ -->

project-root/
│
├── src/
│ ├── config/
│ │ ├── database.js
│ │ └── server.js
│ │
│ ├── controllers/
│ │ └── userController.js
│ │
│ ├── middleware/
│ │ ├── errorHandler.js
│ │ └── validators.js
│ │
│ ├── models/
│ │ └── userModel.js
│ │
│ ├── routes/
│ │ ├── index.js
│ │ └── userRoutes.js
│ │
│ ├── services/
│ │ └── userService.js
│ │
│ └── app.js
│
├── .env
├── .gitignore
└── package.json
