const Todo = require('../models/todo');

module.exports.home = function(req, res){

    Todo.find( {}, function(err, Todos) {

        if (err) {
            console.log('Error is occured in DB in /get funtion');
        }

        // console.log(Todos);

        return res.render('home', {
            title : 'Todo App',
            isGrid : false ,
            todoList : Todos
        });

    });

}