const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Passw0rd',
      database : 'nodejs'
    }
  });

module.exports = {
    
    // app.get('/users',(req,res)
    index(req,res) {
        const result = knex.select('').from('user');
        result.then((data)=>{
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.send('Error contact administrator')
            console.log(err)
        })
    },
    // app.get('/users/:id',(req,res)
    show(req,res) {
        //console.log(req.params)
        var id = req.params.id;
        console.log(id)
    
        const result = knex.select('').from('user').where({id: id});
        result.then((data)=>{
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({message:'Error contact administrator'})
            console.log(err)
        })
    },
    // app.post('/users',(req,res)
    create(req,res) {

        const newDate = new Date()
        const input = {...req.body, created_at: newDate }
        console.log(input)
        knex('user').insert(input)
        .then(() => res.status(201).json({message:'Added sucessfully'}))
        .catch(err => {
            console.log(err)
        })  
    },
    // app.put('/users/:id',(req,res)
    update(req,res) {
        var id = req.params.id;
        knex.select('id').from('user').where({id: id})
        .then((data)=>{
            console.log(data)
            if (data.length <= 0) 
                res.json({ message: 'No Content' })
            else{
                knex('user')
                .where({id:id})
                .update(req.body)
                .then (() => res.send('Updated sucessfully'))
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message:"in error of put"})
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.json({message:"No id in DB"})
        })
    
    },
    // app.delete('/users/:id',(req,res)
    delete(req,res) {
        var id = req.params.id;
        knex('user')
        .where({id:id})
        .del()
        .then (() => res.send('Delete sucessfully'))
        .catch(err => console.log(err))
    }
}