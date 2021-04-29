const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req,res)=>{
    res.render('./index')
});

app.get('/about', (req,res)=>{
    res.render('./about')
});

app.get('/development', (req,res)=>{
    res.render('./dev')
});

app.get('/counseling', (req,res)=>{
    res.render('./counseling')
});

app.get('/contact', (req,res)=>{
    res.render('./contact')
});

app.use((req,res)=>{
    res.status(404).render('404Error');
});

app.listen(port, function() {
    console.log(`El servidor está corriendo en el puerto: ${port}`)
    console.log("http://localhost:3000")
})