const JWT_SECRET="DHAN@1234"
const jwt=require("jsonwebtoken");

const generateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
};

module.exports=generateToken;