import Request from "../models/RequestModel.js";


export const createRequest =async(req,res)=>{
    try {
        const{providerId,serviceType,date,time}=req.body;
        const newRequest=new Request({
            customerId:req.user.id,
            providerId,
            serviceType,
            date,
            time,
        });
        await newRequest.save();
        res.status(201).json({message:"Request sent successfully"})
        console.log(req.body);
        console.log(req.user);
    } catch (error) {
        res.status(500).json({message:"Error sending request", error:error.message})
        console.log(error.response?.data);
    }
}

export const getProviderRequests = async (req, res) => {
  try {
    const requests = await Request.find({
      providerId: req.user.id,
    }).populate("customerId", "fullName email");

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching requests",
      error: error.message,
    });
  }
};


export const updateRequestStatus=async(req,res)=>{
    try {
        const {status}=req.body;
        const update=await Request.findByIdAndUpdate(req.params.id,{status},{new:true});
        res.status(200).json({message:"Request status updated", request:update})
    } catch (error) {
        res.status(500).json({message:"Error updating request status", error:error.message})
    }
}