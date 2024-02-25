import mongoose from "mongoose";

const cateogrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const Category = new mongoose.model("Category", cateogrySchema);
