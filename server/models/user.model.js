import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please provide name"]
    },
    email:{
        type:String,
        require:[true,"Please provide email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please provide password"],
    },
    avatar:{
        type:String,
        default:""
    },
    mobile:{
        type:number,
        default:null
    },
    refresh_token:{
        type:String,
        default:""
    },
    verify_email:{
        type:Boolean,
        default:false
    },
    last_login_date:{
        type:Date,
        default:""
    },
    status:{
        type:String,
        enum:["Active","Inactive","Suspended"],
        default:"Active"
    },
    address_details:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'address'
        }
    ],
    shopping_cart:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'cartProduct'
        }
    ],
    order_history:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'order'
        }
    ],
      forget_password_otp:{
        type:String,
        default:null
    },
     forget_password_expiry:{
        type:Date,
        default:""
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    }
    
},{
    timestamps:true
})

const UserModel = mongoose.model('user',userSchema)

export default UserModel