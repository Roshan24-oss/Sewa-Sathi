import jwt from 'jsonwebtoken';

const authMiddleware =(req,res,next)=>{

    try {
        
        const token = req.cookies.token;
if (!token) return res.status(401).json({ message: "No token found" });

const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded;
console.log("cookies token:", token);
next();
    } catch (error) {
        return res.status(401).json({message:'Invalid or expired token'});
        
    }
}
export default authMiddleware;