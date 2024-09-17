const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentSchema = new Schema({

    rollNo: { type: Number },
    name: { type: String },
    fathername: { type: String },
    aadharCardNumber: { type: Number },
    mobileNo: { type: String },
})

module.exports = mongoose.model('student', StudentSchema)