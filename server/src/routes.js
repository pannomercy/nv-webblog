const UserControler = require('./controllers/UserController')

module.exports = (app) =>{
    /*  RESTFul API for users managment */
    // create user
    app.post('/user',UserControler.create)

    // edit user
    app.put('/user/:userId',UserControler.put)

    // delete user
    app.delete('/user/:userId',UserControler.remove)

    //get user by Id
    app.get('/user/:userId', UserControler.show)

    //get all users
    app.get('/users', UserControler.index)

}