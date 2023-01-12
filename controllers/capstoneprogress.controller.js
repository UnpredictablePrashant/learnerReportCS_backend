const mongoose = require("mongoose");
const capsprog = require("../models/student.model");


async function searchstudentprogress(req,res){
    let searchprogress = req.body.search;

    console.log(searchprogress)
    const filter = {
        $or: [
            {userId: {$in:[searchprogress]}},
            {email: {$in:[searchprogress]}}
        ], 
    };
    let searchlist = await capsprog.student.model.find(filter);
    res.json(searchlist);
}

module.exports = {
  searchstudentprogress,
};