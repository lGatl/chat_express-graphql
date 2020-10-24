const authResolver = require('./auth');
const usersResolver = require('./users');
const messageResolver = require('./message');
const salleResolver = require('./salle');

const rootResolver = {
  ...authResolver,
  ...usersResolver,
  ...messageResolver,
  ...salleResolver
};

module.exports = rootResolver;
