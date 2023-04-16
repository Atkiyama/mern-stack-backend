const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const ItemSchema = new Schema({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String,
});
exports.ItemModel = mongoose.model("Item", ItemSchema);
exports.UserModel = mongoose.model("User", UserSchema);
