import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    qty: {
      type: Number
    }
  },
  { timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel
