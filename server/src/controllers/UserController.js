module.exports = {

    // get all user
    index(req,res){
        res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
    },

    // create user
    create(req,res){
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },

    // edit user
    put(req,res){
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId +':'+JSON.stringify(req.body))
    },

    // delete user
    remove(req,res){
        res.send('ทำการลบผู้ใช้งาน: '+req.params.userId+':'+JSON.stringify(req.bosy))
    },

    // get user by id
    show(req,res){
        res.send('ดูข้อมูลผู้ใช้งาน: '+req.params.userId)
        // res.send('นั้นก็คือ ' + JSON.stringify(req.body))
    }

}