const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dateformat = require('dateformat');

// เนื้อหาเพิ่มตอนทำ vue
let cors = require('cors')
// vue cors use 
app.use(cors())
app.use(bodyParser.json()); //เพื่อรับข้อมูลที่เป็น JSON จาก body postman
app.use(bodyParser.urlencoded({extended: true}))


require('./routes')(app)


app.get('/',(req,res) => {
    res.send('In get');
})



app.listen(3000);
console.log('Start port 3000');