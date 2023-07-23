const UsersDetails = require("../../MongoDB/usersDetails");

const uploadUserDetails = async (req, res) => {
  const { email, fullName, contactNo, address } = req.body;

  const userDetails = await UsersDetails.find({ email });

  if (userDetails.length != 0) {
    return res.status(400).json({
      Message: "Details already exist for this user, please update them",
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
      return res.status(200).json({
        message: `Created user details for ${created_userDetails.email}`,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

const updateUserDetails = async (req, res) => {
  const { email, fullName, contactNo, address } = req.body;

  try {
    // Find the user details with the provided email
    const userDetails = await UsersDetails.findOne({ email });

    // If no user details found, return an error
    if (!userDetails) {
      return res
        .status(404)
        .json({ Message: "No details for this user, please create new ones" });
    }

    // Update the user details with the new values
    userDetails.fullName = fullName;
    userDetails.contactNo = contactNo;
    userDetails.address = address;

    // Save the updated user details to the database
    const updated_userDetails = await userDetails.save();

    return res
      .status(200)
      .json({ message: `Updated details for ${updated_userDetails.email}` });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { uploadUserDetails, updateUserDetails };
