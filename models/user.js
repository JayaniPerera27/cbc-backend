import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true 
    },
    lastName : {
        type : String,
        required : true 
    },
    password : {
        type : String,
        required : true 
    },
    isBlocked : {
        type : Boolean,
        default : false 
    },
    type : {
        type : String,
        default : "customer"
    },
    profilePicture : {
        type : String,
        default : "https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=9&uuid=595b9276-71cd-44a1-8a50-0a2c1bd24012&new_detail=true"
    }

})

const User = mongoose.model("users",userSchema)

export default User;