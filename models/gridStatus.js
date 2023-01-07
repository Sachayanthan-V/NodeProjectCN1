const mongoose = require('mongoose');

const gridStatusSchema = new mongoose.Schema({

    gridStatus : {
        type : Boolean,
        required : true,
    }

});

const GridStatus = mongoose.model('gridstatus', gridStatusSchema);

module.exports = GridStatus;