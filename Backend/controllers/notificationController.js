import Notification from "../models/Notification.js"

export const deleteNotification = async(req,res)=>{
    try {
        const {id}=req.params;
        const notification = await Notification.findOne({_id:id,
            userId:req.user.id
        })

        if(! notification){
            return res.status(400).json({message:`Notificaton not found`});


        };

        await notification.deleteOne();

        res.status(200).json({message:`Notification Deleted sucessfully`})
    } catch (error) {
       res.status(500).json({message:`Server error on deleting message`,error}) 
    }
};