import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";


const app = express();

// conectar db
db.authenticate()
    .then( ()=> console.log('db conectada') )
    .catch( error => console.log(error))

const port = process.env.PORT || 4000;

// habilitar pug
app.set('view engine', 'pug');

app.use((req,res,next)=>{

    const year = new Date();

    res.locals.actualYear = year.getFullYear(); 
    res.locals.nombreSitio = "Agencia de Viajes"
    next()
});

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use('/', router);

app.listen(port, ()=>{
    console.log(`El sv esta funcionando en el puerto ${port}`);
});

