import jwt from 'jsonwebtoken' 
import userModel from '../models/user'
const privateKey = `${process.env.SECRETKEY}`

export const validateAuth = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.forbidden({message: "Token is undefined"})
    if(!decode(authHeader)) return res.badRequest({message : "Invalid Signature"})
    const getID = decode(authHeader).user_id
    console.log(getID, "getIDDDDDD")
    try{
        const findUser = await userModel.findOne({
            _id: getID
        })
        req.data_user = findUser
        console.log(findUser, "userrrrrrrrrrrrrrrrrrrrrrrr")
        next()       
    }catch(err){
        res.error({message: err})
    }

}

export const decode = (auth) => {
    try{
     const tokenDecode = jwt.verify(auth, privateKey, { algorithms: ['HS256'] });
    //  console.log(tokenDecode, "tokenDecode")
     return tokenDecode
    }catch (err){
       return false
    }
}