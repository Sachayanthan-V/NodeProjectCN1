const mongoose = require('mongoose');
const GridStatus = require('../models/gridStatus');

var GridCurrentStatus;

async function checkStatusOfGrid(){
    console.log("checkStatus");
    const GridCounter = await GridStatus.countDocuments({});
    // console.log("****************= ", GridCounter, "***********");   

    if (GridCounter==0){
        GridStatus.create({ 
            gridStatus : false
        }, function(err, currGridStatus){
            if (err){
                // console.log('Error in creating a gridStatus');
                return;
            }
            // console.log("Grid Status updated!..", currGridStatus);
            // return res.redirect('back');
        });
    }

}


async function GridCurrentStatusFinder(){

    console.log("called gridCurrentStatusFinder()");

    await GridStatus.findOne( {}, (err, result)=>{
        if (err) {
            // console.log("Error occured in Db while findOne ");
            return;
        }
        // console.log(`FindOne result is : ${result}`)
        // console.log(`FindOne result is : ${result.gridStatus}`);
        // console.log(`FindOne result is : ${result.id}`);
        GridCurrentStatus = result.gridStatus;
    });

    // console.log("not status", !GridCurrentStatus); 

    return GridCurrentStatus;
}

async function toggleGridStatus() {

    console.log("called the toggleGridStatus");
    // console.log(`Grid status start ${GridCurrentStatus}`);
    GridCurrentStatus =  await GridCurrentStatusFinder();
    // console.log(`Grid status end ${GridCurrentStatus}`);
    GridStatus.updateOne({}, {
        gridStatus : !GridCurrentStatus
    }, (err, result)=>{
        if (err){
            // console.log('error in updateOne: ');
        }
        // console.log('Result in update One', result);
    }); 
    console.log(" Grid status after time", !GridCurrentStatus);
    return !GridCurrentStatus;
}



checkStatusOfGrid();
module.exports  = toggleGridStatus();