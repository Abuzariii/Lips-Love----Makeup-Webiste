const Users = require("../../MongoDB/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const secret = "abuzar"; // Replace this with your actual secret key
  const options = {
    expiresIn: "1h", // Token will expire in 1 hour
  };
  return jwt.sign(payload, secret, options);
};

// Signup
const signUp = async (req, res) => {
  const { email, username, password } = req.body;

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const created_user = await Users.create({
      email,
      username,
      password: hashedPassword,
    });
    res.status(200).json({ Message: `Signed Up for ${created_user.email}` });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login
const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.find({ email });
  hashedPassword = user[0].password;
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

  // Generate the token
  const token = generateToken({ username: `${user[0].username}` });

  try {
    if (isPasswordMatch) {
      res.status(200).json(token);
    } else {
      res.status(201).json({ Message: "Password Didn't" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  signUp,
  Login,
};
