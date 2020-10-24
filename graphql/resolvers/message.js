const Message = require('../../models/message');

module.exports = {
  messages: async args => {

    try {
      const messages = await Message.find({salle:args.salle});
      return messages
    } catch (err) {
      throw err;
    }
  },
  createMessage: async (args, req) => {

    const message = new Message({
      author: args.messageInput.author,
      message: args.messageInput.message,
      salle: args.messageInput.salle,
      date: new Date(args.messageInput.date),
    });
    let createdMessage;
    try {
      const createdMessage = await message.save();
      
      return createdMessage;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
