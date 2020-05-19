const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Passw0rd',
      database : 'nodejs'
    }
  });


const jwt = require('jsonwebtoken')

function jwtSignUser (user){
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, 'Pan', {
        expiresIn:  ONE_WEEK
    })
}

  module.exports = {

    login (req,res) {
        const {email, password} = req.body
        const result = knex.select('').from('user').where({email: email});
        result.then((data)=>{
            console.log(data);
            // res.send(data);
            user = data;
            if(!user) {
                return res.status(403).send({
                    error: 'User/Password not correct'
                })
            }

            if(user[0].password!==password) {        
                return res.status(403).send({          
                    error: 'Password not correct'        
                })      
            } 
            
            // const userJSON = user.toJSON()
            // res.send(JSON.parse(JSON.stringify(user[0])))

            res.send({
                user: user[0],
                token: jwtSignUser(JSON.parse(JSON.stringify(user[0])))
            })

            // res.send({
            //     user: user[0],
            //     token: jwtSignUser(JSON.parse(user))
            // })


        })
        .catch(err => {
            res.status(500).send({message:'User not correct'})
            console.log(err)
        })
        
  


    }



  }