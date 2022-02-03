import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import sendMail from "../utils/sendMail.js";

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const registerUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User Already Exist!')
    }

    const user = await User.create({
        email,
        password
    })

    sendMail(user)
    
    if(user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('User not found')
    }
})


const getUserProfile = asyncHandler(async(req, res)=> {
    const user = await User.findById(req.user._id)
    console.log('in controller',user)

    if (user) {
        res.json({
            _id: user._id,
            email: user.email
        })
    } else {
        res.status(404)
        throw new Error('User not found!')
    }
}) 


export {authUser, getUserProfile, registerUser}