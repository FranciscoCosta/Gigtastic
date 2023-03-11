import mongoose from "mongoose";
const { Schema } = mongoose;

const gigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      default: "",
    },
    images: {
      type: Array,
      default: [],
    },
    shortTitle: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    shortDesc: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionsNumber: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      default: [],
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", gigSchema);
