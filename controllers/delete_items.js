const Todo = require('../models/todo');

module.exports.home = function(req, res){

    // console.log('coming', req.params);

    let value = req.params.id;
    console.log(value);
    Todo.findByIdAndDelete( value, function(err, Todos) {

        if (err) {
            console.log('Error is occured in DB in /get funtion');
            return;
        }

        console.log("hi its deleted");
        console.log(Todos);
        return res.redirect('back');

    });

}