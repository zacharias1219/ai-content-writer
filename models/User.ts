import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    profilePicture?: string;
}

const UserSchema: Schema = new Schema(
    {
    name: {type: String, required: true},
    email: {type: String, required: true},
    profilePicture: {type: String}
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;