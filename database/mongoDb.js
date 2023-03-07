const mongoose = require("mongoose");

const connect = () => {
    //  mongoose.connect(process.env.MONGO,{autoIndex:true});
    mongoose
      .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("db Connected")).catch((err)=>{
        console.log(err)
      })
};

module.exports = connect;
