import { Timestamp } from "mongodb";
import { Schema, model, models } from "mongoose";

const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true, "Email address already exists."],
        required:[true, "Email address required."]
    },
    username:{
        type:String,
        unique:[true, "Email is already existed."],
        required:[true, "Email is required."]
    },

    image:{
        type:String,

    },
    bookmarks:[
        {
            type:Schema.Types.ObjectId,
            ref:'Property'
        }
    ]
}, 
 {
    timestamps:true
 }
);

const User=models.User || model('User', UserSchema);

export default User;