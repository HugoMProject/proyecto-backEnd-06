const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes/products'));


app.use((err, req, res, next) => {
    return res.json({
        error: JSON.parse(err.message)
    });

});
app.listen(3000, () => console.log('proyecto iniciado  en puerto 3000'));