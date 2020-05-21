const express= require('express');
const app= express();
var port = process.env.PORT || 3000;
var persone = require("./persone.json");
app.get('/', (req, res)=> res.send("Ciao Mondo!!!"));
app.route('/persone')
    .get(function (req, res) {
        persone.forEach(pers => {
            res.send("Nome:" + pers.Nome + " Cognome:" + pers.Cognome + " Età:" + pers.Eta);
        });

    });
app.listen(port, ()=> console.log('server in ascolto:'+ port));
