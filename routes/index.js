const appointments = require("./appointments");

module.exports = (app)  => {
  app.use('/api', [
    appointments
  ])
};
