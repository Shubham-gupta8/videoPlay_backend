import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        // username : String,
        // password : String,
        // email : String,
        // contact : Number

        username : {
            type: String,
            required : true,
            unique : true,
            lowercase : true
        },
        password : {
            type : String,
            required : true,
        }
    },{timestamps:true}
)

export const user = mongoose.model("User",userSchema)


/*
line 23 mai jo User h wo model ka naam h jo ki mongo db mai store h
line 23 mai jo user h wo variable ka naam h jisse hm mongo db ke user model ko store kr rhe h
line 23 mai jo user h or User h standard practice mai dono same rkhte h yha smjhne ke liye 
alg kiye h


mongo db mai koi bhi model ka naam lowercase mai or plural mai convert ho jata h
isley User ka users ho jaega

line 20 mai timestamps bht commonly use hota h it provide u the features like created at 
and updated at
*/
