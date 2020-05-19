const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app)=>{
    // get all user
    app.get('/users',UserController.index)
    // get by id
    app.get('/user/:id',UserController.show)
    // create user
    app.post('/user',UserController.create)
    // update user
    app.put('/user/:id',UserController.update)
    // delete user
    app.delete('/user/:id',UserController.delete)

    app.post('/login', UserAuthenController.login)

}