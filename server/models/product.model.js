import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
category:{
  type: String,
  trim: true,
  required: 'Category is required'
},
 name: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 description: {
  type: String,
 trim: true,
 required: 'Description is required'

 },
 quantity: {
 type: Number,
 trim: true,
required: 'Quantity is required'
 },
 price: {
type: Number,
trim: true,
required: 'Price is required'
   },

   created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
});

   //Validation
/*UserSchema.path('price').validate(function (v) {
  if (v <= 0) {
    this.invalidate('price', 'Product price must be greater than 0!');
  }
}, null);

UserSchema.path('quantity').validate(function (v) {
  if (v < 0) {
    this.invalidate('quantity', 'Product quantity must be >= 0!');
  }
}, null);*/
 
/*hashed_password: {
type: String,
required: 'Password is required'
},
salt: String
});

UserSchema.virtual('password')
 .set(function(password) {
 this._password = password;
//this.salt = this.makeSalt();
this.hashed_password = password;
})
.get(function() {
return this._password;
 });
UserSchema.path('hashed_password').validate(function(v) {
 if (this._password && this._password.length < 6) {
 this.invalidate('password', 'Password must be at least 6 characters.');
}
 if (this.isNew && !this._password) {
this.invalidate('password', 'Password is required');
 }
}, null);*/
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('product', UserSchema);

