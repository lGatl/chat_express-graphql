const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author:  {
      type: String,
      required: true
    },
  date: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
   salle: {
    type: String,
    required: true
  },
 
});



module.exports = mongoose.model('Message', messageSchema);
