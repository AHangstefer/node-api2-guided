# Server-Side Routing with Express

Guided project for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.

Please follow along as the instructor builds the API step by step.

NOTES:

Not restful     Restful
/listUsers      GET /users
/getUserById    Get /users/:id
/updateUserById PUT or PATCH /users/:id
/createUser     Post / users
/deleteUserByID     DELETE /users/:id
/listUserFriends    GET /users/:id/friends
/getUserFriendById  GET /users/:userID/friends/:friendID
/createUserFriend   POST/users/:id/friends

"scripts": {
		"start": "node index.js"
	}

    added to package.json and now we can run
    npm start instead of 
    node index.js
    CUSTOM SCRIPT == npm run script-name

