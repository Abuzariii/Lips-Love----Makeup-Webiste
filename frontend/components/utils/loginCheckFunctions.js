import jwt from "jsonwebtoken";

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt-token");
  }
  return null;
}

export function decodeJWT(
  setDecodedToken,
  setIsLoggedIn,
  setLoggedInEmail,
  setLoggedInUsername
) {
  const token = localStorage.getItem("jwt-token");

  try {
    const decoded = jwt.decode(token);
    setDecodedToken(decoded);
    if (decoded !== null) {
      setIsLoggedIn(true);
      setLoggedInEmail(decoded.email);
      setLoggedInUsername(decoded.username);
    }
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}
