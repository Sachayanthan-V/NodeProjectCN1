const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const Todo = require('./models/todo');


app.use( '/', require('./routes') ); 


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));


app.post('/create-todo', function(req, res){

    let createObj = {   
        titleName       : req.body.titleHeader      ? req.body.titleHeader       : 'null',
        titleDescription: req.body.titleDescription ? req.body.titleDescription  : 'null', 
        startDate       : req.body.startDate        ? req.body.startDate         : 'null',
        startTime       : req.body.startTime        ? req.body.startTime         : 'null',
        endDate         : req.body.endDate          ? req.body.endDate           : 'null',
        endTime         : req.body.endTime          ? req.body.endTime           : 'null',
        todoStatus      : 'Active',
        todoCatagory    : req.body.catagory         ? req.body.catagory          : 'null',
    }

    Todo.create(createObj, function(err, newTodo){ 
        if(err){console.log('Error in creating a todo!');return;} 
            console.log('******', newTodo);
            return res.redirect('back'); 
    });
 
});

 
 
app.get('/', (req, res)=>{
    // Todo.find( {endTime: '23:23'}, function(err, contacts){
    Todo.find( {}, function(err, Todos) {
        if (err) {
            console.log('Error is occured in DB in /get funtion');
        }
        console.log(Todos);
        return res.render('home', {
            title : 'Todo App', 
            isGrid : false ,    
            todoList : Todos    
        });                     
    });                         
});                             

app.listen(port, function(err){
    if(err){
        console.log(`Error Occurred while connecting to the port : ${port}`);
        return;
    }

    console.log(`Server is up and running with the Port : ${port}`);
});