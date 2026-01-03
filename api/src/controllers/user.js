const User = require("../models/user");

// Create user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: users,
  });
};
