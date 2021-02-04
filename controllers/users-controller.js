const { validationResult } = require("express-validator");

const User = require("../models/user");
const HttpError = require("../models/http-error");

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs, please try again", 422));
  }

  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Could not find email", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User already exists, please login", 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image:
      "https://images.pexels.com/photos/2880122/pexels-photo-2880122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    password,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("User signup failed", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Login failed. Could not find email", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in",
      401
    );
    return next(error);
  }

  res.json({ message: "logged in " });
};

const getUsersById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((u) => {
    return u.id === userId;
  });

  if (!user) {
    throw new HttpError("could not find that... oops", 404);
  }
  res.json({ user });
};

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError("fetching users failed", 500);
    return next(error);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

exports.getUsersById = getUsersById;
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
