import userModel from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' 

const salt = bcrypt.genSaltSync(10);
const privateKey = `${process.env.SECRETKEY}`

//register
export const postUser = async (req, res) => {
    console.log(req.body)
    //cek password Confirmation
    // if (req.body.password != req.body.confPassword) return res.badRequest({
    //     message: "Password not match"
    // });
    try {
        //cek email
        const getUserExist = await userModel.findOne({
            email: req.body.email
        })
        if(getUserExist) return res.badRequest({
            message: "User has Exist"
        });

        //encrypt password
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
    

        //post new schema
        const regiser = new userModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashPassword,
        });

        const savedUser = await regiser.save();
        if(!savedUser) throw new Error("Failed went created user");
        res.ok({
            status_code: 200,
            message: "sucsess post user",
            data: savedUser
        });
    } catch(err) {
        console.log(err)
        res.error({
            message: err
        });
    }
}


//login
export const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try{
        //verify email
        const getUser = await userModel.findOne({
            email: email
        }).select('+password')
        if(!getUser) return res.badRequest({message : 'Oops, Pengguna Tidak di temukan' })

        //verify password
        const verifyPassword = await bcrypt.compareSync(password, getUser.password); 
        if(!verifyPassword) return res.badRequest({message : 'Email atau password salah, silahkan coba lagi' })
        console.log(verifyPassword, 'verifyPassword')

        //set token 
        if(getUser) {
         const token = jwt.sign({user_id: getUser._id}, privateKey, {
            algorithm: 'HS256'
        });
        return res.ok({
            status_code: 200,
            message: "Sucsessfully login",
            data: {token: token}
        });
        }

    }catch (err){
        res.error({
            message : err
        });
    }  

}


export const getUser = async (req, res) => {
    console.log("req.data")
    try{
        const findUser = await userModel.findOne({
            _id: req.data_user._id
        })
        res.ok({
            status_code: 200,
            message: "Token is valid",
            data: findUser
        });
        console.log(findUser, "user")
    }catch(err){
        res.error({message: err})
    }   
}



