const Todo = require('../models/todo');

module.exports.filter = function(req, res){

    console.log(req.query.val);
    let value = req.query.val;
    console.log(value);
    Todo.find( { "todoStatus" : value } , function(err, Todos) {

        if (err) {
            console.log('Error is occured in DB in /get funtion');
            return;
        }

        console.log("hi filtered");
        console.log(Todos);
        // return res.redirect('back');
        return res.render('home', {
            title : 'Todo App',
            isGrid : false ,
            todoList : Todos
        });

    });

    // res.send('<h1>working params</h1>');

}