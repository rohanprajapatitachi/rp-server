const User = require('../models/user-model');


exports.registerUser = async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Save the user to the database
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  };


