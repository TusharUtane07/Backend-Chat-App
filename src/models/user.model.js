import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		onlineStatus: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
