const Todo = require('../models/todo');

module.exports.gridHome = function(req, res){

    // req.url = '/';   

    Todo.find( {}, function(err, Todos) {

        if (err) {
            console.log('Error is occured in DB in /get grid funtion');
        }

        // console.log(Todos);

        return res.render('home', {
            title : 'Todo App',
            isGrid : true ,
            todoList : Todos
        });

    });

}
