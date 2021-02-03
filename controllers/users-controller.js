const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Phil",
    email: "minielly5@hotmail.com",
    password: "test",
  },
  {
    id: "u2",
    name: "Bob",
    email: "aslfuhg@test.com",
    password: "test",
  },
];

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs, please try again", 422);
  }
  const { name, email, password } = req.body;
  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("That email already exists", 422);
  }
  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError("login failed try again", 401);
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

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

exports.getUsersById = getUsersById;
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
