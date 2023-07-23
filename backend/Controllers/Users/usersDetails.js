const UsersDetails = require("../../MongoDB/usersDetails");

const uploadUserDetails = async (req, res) => {
  const { email, fullName, contactNo, address } = req.body;

  const userDetails = await UsersDetails.find({ email });

  if (userDetails.length != 0) {
    return res.status(400).json({
      Message:
        "Details already exist for this user, please update or delete the details",
    });
  }

  if (userDetails.length == 0) {
    try {
      const created_userDetails = await UsersDetails.create({
        email,
        fullName,
        contactNo,
        address,
      });
      return res.status(200).json(created_userDetails);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

module.exports = { uploadUserDetails };
