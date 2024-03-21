import mongoose, { Schema } from "mongoose";

const messageSchema = mongoose.Schema({
	sender: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	recipient: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now(),
	},
	read: {
		type: Boolean,
		default: false,
	},
});

export const Message = mongoose.model("Message", messageSchema);
