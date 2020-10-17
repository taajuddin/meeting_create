const Meeting=require('../models/meeting')
const meetingControllers={ }

meetingControllers.list=(req,res) =>{
    Meeting.find()
    .then((meeting) => {
        res.json(meeting)
    })
    .catch((err) => {
        res.json(err)
    })
}

meetingControllers.create=(req,res)=>{
    const body = req.body
    const meeting = new Meeting(body)
    meeting.save()
        .then((meeting) => {
            res.json(meeting)
        })
        .catch((err) => {
            res.json(err)
        })
}

meetingControllers.show=(req,res)=>{
    const id = req.params.id
    Meeting.findById(id)
        .then((meeting) => {
            res.json(meeting)
        })
        .catch((err) => {
            res.json(err)
        })
}

meetingControllers.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Meeting.findByIdAndUpdate(id,body,{new:true, runValidators:true})
    .then((meeting)=>{
        res.json(meeting)
    })
    .catch((err)=>{
        res.json(err)
    })
}
// tasksCltr.destroy=(req,res)=>{
//     const id=req.params.id
//     Task.findByIdAndDelete(id)
//         .then((task)=>{
//             res.json(task)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }

module.exports=meetingControllers