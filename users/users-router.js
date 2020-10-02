
// creating mini router/server that needs to be
//exported from here and imported into index.js
const express = require('express')
const router = express.Router()
const users = require("./users-model")


router.get("/users", (req, res) => {
    console.log(req.query)
    //users.find({ sortBy: req.query.sortBy })(
    users.find(req.query)
		.then((users) => {
			res.status(200).json(users)
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error retrieving the users",
			})
		})
})

router.get("/users/:id", (req, res) => {
	users.findById(req.params.id)
		.then((user) => {
			if (user) {
				res.status(200).json(user)
			} else {
				res.status(404).json({
					message: "User not found",
				})
			}
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error retrieving the user",
			})
		})
})

router.post("/users", (req, res) => {
	if (!req.body.name || !req.body.email) {
		return res.status(400).json({
			message: "Missing user name or email",
		})
	}

	users.add(req.body)
		.then((user) => {
			res.status(201).json(user)
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error adding the user",
			})
		})
})

router.put("/users/:id", (req, res) => {
	if (!req.body.name || !req.body.email) {
		return res.status(400).json({
			message: "Missing user name or email",
		})
	}

	users.update(req.params.id, req.body)
		.then((user) => {
			if (user) {
				res.status(200).json(user)
			} else {
				res.status(404).json({
					message: "The user could not be found",
				})
			}
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error updating the user",
			})
		})
})

router.delete("/users/:id", (req, res) => {
	users.remove(req.params.id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({
					message: "The user has been nuked",
				})
			} else {
				res.status(404).json({
					message: "The user could not be found",
				})
			}
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error removing the user",
			})
		})
})

router.get("/users/:id/posts", (req,res)=> {
    users.findUserPosts(req.param.id)
        .then(()=>{
            res.json(posts)

        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({
                message: "Could not get user posts",
            })
        })
})

router.get("/users/:userId/posts/:postId", (req, res)=> {
    users.findUserPostById(req.params.userId, req.params.postId)
    .then((post)=>{
        if (post) {
            res.json(post)
        } else {
            res.status(404).json({
                message: "post was not found",
            })
        }
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            message: "Could not get user post",
        })
    })
})

router.post("/users/:id/posts", (req, res) => {
    if (!req.body.text){
        return res.status(400).json({
            message: "please include text"
        })
    }
    users.addUserPost(req.params.id, req.body)
        .then((post) => {
            res.status(201).json(post)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({
                message: "Could not create user post",
            })
        })
})

// create endpoint that returns all the posts for a user
// create endpoint that returns a single post for a user
// create endpoint for adding a new post for a user

//400 errors and below are for the client
// above 400 is for the developers so we dont send
// those to the client

// return statement in post in user/:id/posts stops the code 
// continuing to run. Could also use an if/else
// to cancel request early, use return. 

module.exports = router

