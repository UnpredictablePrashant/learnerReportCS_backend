const mongoose = require("mongoose");

const connect = () => {
    //  mongoose.connect(process.env.MONGO,{autoIndex:true});
    mongoose
      .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("db Connected")).catch((err)=>{
        console.log(err)
      })
};

module.exports = connect;
