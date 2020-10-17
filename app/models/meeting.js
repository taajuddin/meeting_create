const mongoose = require('mongoose')
const { uuid } =require('uuidv4')
const Schema = mongoose.Schema
const meetingSchema = new Schema({
    meeting_id: {
        type:String,
        default:uuid()
    },
    title: {
        type: String,
        required: true
    }, 
    date: {
        type: Date
    },
    time:{
        type:Date
    },
    organiser:{
        type:String
    },
    attendies:{
        type:Array,
        default:[]
    },
    
},{timestamps:true}
)

const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting