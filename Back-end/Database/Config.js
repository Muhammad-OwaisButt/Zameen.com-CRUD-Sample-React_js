const mongoose = require('mongoose');

const DataBase = 'mongodb://localhost:27017/Zameen';
mongoose.connect(DataBase,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => 
console.log("DataBase Connected")).catch((err) => 
console.log("Error" + err.message));

module.exports = mongoose