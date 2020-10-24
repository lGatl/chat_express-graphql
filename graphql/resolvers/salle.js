const Salle = require('../../models/salle');

module.exports = {
  salles: async () => {
    
    try {
      const salles = await Salle.find();
      return salles
    } catch (err) {
      throw err;
    }
  },
  createSalle: async (args, req) => {

    const salle = new Salle({
      name: args.salleInput.name,
      date: new Date(Date.now()),
    });
    let createdSalle;
    try {
      const createdSalle = await salle.save();
      
      return createdSalle;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
