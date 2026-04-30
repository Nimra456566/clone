const users = require('../data/usersData');

// GET all users
const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: users
  });
};

// GET user by ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    message: "User fetched successfully",
    data: user
  });
};

// CREATE user
const createUser = (req, res) => {
  const newUser = req.body;

  // basic validation (warna garbage data aayega)
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  newUser.id = users.length + 1;

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
};

// UPDATE user
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...updatedData };

  res.status(200).json({
    message: "User updated successfully",
    data: users[index]
  });
};

// DELETE user
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    data: users
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};