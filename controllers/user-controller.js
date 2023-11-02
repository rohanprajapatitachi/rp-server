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


exports.getAllUser = async (req, res) => {
  try {
    const allUserData = await User.find();
    console.log("allUserData ~~~~~>", allUserData);
    res.status(200).send(allUserData);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const payload = req.body;
    const updateUserData = await User.findByIdAndUpdate(userId,payload, {new: true});
    res.status(200).send(updateUserData);
  }catch(error){
    console.error(error);
    res.status(400).send(error);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUserData = await User.findByIdAndDelete(userId);
    res.status(200).send(deleteUserData);
  }catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}
