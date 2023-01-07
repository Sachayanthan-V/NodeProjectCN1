const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error', function(err) { console.log(`Error while connecting to DB!... ${err.message}`); });

db.once('open', function(){
    console.log('DB is connected successfully');
});