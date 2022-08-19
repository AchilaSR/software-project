const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
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

    workplace:{type:String,},
    subject:{type: String, },
    EducationandQualification:{type: String, },
    about:{type: String, },
    propic:{type:String,}

},

{
    timestamps: true
})

module.exports = mongoose.model('teacher', teacherSchema)