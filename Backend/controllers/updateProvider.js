import User from "../models/User.js";
export const updateProviderProfile=async(req,res)=>{
    try {
        const{address,experience,skills,availability,about}=req.body;
        const user=await User.findByIdAndUpdate(req.user.id,{
            address,experience,skills,availability,about
        },{new:true});
        res.status(200).json({message:"Profile Updated",user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error updating profile",error});
    }
}