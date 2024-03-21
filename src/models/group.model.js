import mongoose, { Schema } from "mongoose";

const groupSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

export const Group = mongoose.model("Group", groupSchema);
