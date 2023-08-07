export const updateDetails = async (
  e,
  fullNameRef,
  contactNoRef,
  addressRef,
  setMessage
) => {
  const token = localStorage.getItem("jwt-token");
  const fullName = fullNameRef.current.value;
  const contactNo = contactNoRef.current.value;
  const address = addressRef.current.value;

  if (token) {
    await fetch("http://localhost:4000/user-details/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fullName,
        contactNo,
        address,
      }),
    });
    fullNameRef.current.value = "";
    contactNoRef.current.value = "";
    addressRef.current.value = "";
  } else {
    setMessage("Failed to update details");
  }
};
