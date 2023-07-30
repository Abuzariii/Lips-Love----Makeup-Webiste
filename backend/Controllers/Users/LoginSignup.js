const Users = require("../../MongoDB/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

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

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Validate password length
  if (password.length < 4) {
    return res
      .status(400)
      .json({ message: "Password must be at least 4 characters long" });
  }

  const user = await Users.find({ email: email });

  if (user.length != 0) {
    return res
      .status(500)
      .json({ message: "User already exists, Please login" });
  }

  if (user.length == 0) {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate the token
    const token = generateToken({ username });

    try {
      const created_user = await Users.create({
        email,
        username,
        password: hashedPassword,
      });
      res
        .status(200)
        .json({ message: `Signed Up for ${created_user.email}`, JWT: token });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// Login
const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.find({ email: email });

  if (user.length == 0) {
    return res
      .status(400)
      .json({ message: "Email not registered, please sign up" });
  }

  if (user.length != 0) {
    hashedPassword = user[0].password;
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

    // Generate the token
    const token = generateToken({ username: `${user[0].username}` });

    try {
      if (isPasswordMatch) {
        res.status(200).json({ JWT: token });
      } else {
        res.status(201).json({ message: "Incorrect password" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = {
  signUp,
  Login,
};
