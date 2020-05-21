const express= require('express');
const app= express();
var port = process.env.PORT || 3000;
app.get('/', (req, res)=> res.send("Ciao Mondo!!!"));
app.listen(port, ()=> console.log('server in ascolto:'+ port));
