const express = require('express')
const app = express();
const cors = require('cors') ;//controle de acesso
const morgan = require('morgan'); //controle das requisições

require('./database/database');

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./routes/routes'))

app.listen(app.get('port'), ()=>{
    console.log("server running on port 8000")
});