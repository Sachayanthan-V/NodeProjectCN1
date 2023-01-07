const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({

    titleName : {
        type : String,
        required : true,
    },
    titleDescription : {
        type : String,
        required : true,
    },
    startDate : {
        type : String,
        required : true,
    },
    startTime : {
        type : String,
        required : true,
    },
    endDate : {
        type : String,
        required : true,
    },
    endTime : {
        type : String,
        required : true,
    },
    todoStatus : {
        type : String, 
        required : true,
    },
    todoCatagory : {
        type : String, 
        required : true,
    }

});

const Todo = mongoose.model('todolist', todoListSchema);

module.exports = Todo;