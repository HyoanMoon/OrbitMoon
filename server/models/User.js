import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true, //has to be required
            min: 2,
            max: 50,

        },
        lastName: {
            type: String,
            required: true, //has to be required
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true, //has to be required
            max: 50,
            unique: true, // can't be duplicated

        }, 
        password: {
            type: String,
            required: true, //has to be required
            min: 5,
        }, 
        picturePath: {
            type: String,
            default: "",
        }, 
        friends: {
            type: Array,
            default: [],
        }, 
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
        

    }, {timestamps: true}); //automatic dates when it's created

    const User = mongoose.model("User",UserSchema)
    export default User;