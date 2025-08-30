import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  carouselImages: [
    {
      type: String,
      required: true,
    },

  ],
  color: {
    type: String,
  },
  size: {
    type: String,
  },
   category:{
 type: String,
    required: true,
   },
  trendingDeal: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  todayDeal: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
   createdAt: {
    type: Date,
    default: Date.now,
  },
    imagePublicIds: [{
    type: String
  }]

});

const Product = mongoose.model("Product", productSchema);
export default Product;
