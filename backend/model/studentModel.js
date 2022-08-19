const { urlencoded } = require('express')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstname: {type: String, },
    laststname: { type: String,},
    date: {type: String, },
    gender:{type: String,},
    email: {type: String,required: true, unique: true,},
    password: {type: String, required: true, },
    phonenumber: {type: String,},

    addressline1: {type: String, },
    addressline2: {type: String,},
    city: {type: String, },
    postalcode: {type: Number,},
    province: {type: String,},
    contry: {type: String,},
    
    propic:{type:String,}
},

{
    timestamps: true
})

module.exports = mongoose.model('student', studentSchema)