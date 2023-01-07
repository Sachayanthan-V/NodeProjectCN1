const Todo = require('../models/todo');

module.exports.markcomplete = function(req, res){

    let value = req.params.id;
    console.log(value);
    Todo.findByIdAndUpdate( value, {todoStatus : "Completed"} , function(err, Todos) {

        if (err) {
            console.log('Error is occured in DB in /get funtion');
            return;
        }

        console.log("hi its deleted");
        console.log(Todos);
        return res.redirect('back');

    });

}