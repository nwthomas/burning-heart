import decode from "jwt-decode";

export const getLoginStatus = () => {
  // Pull current token out of storage if it exists
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  // Get currentDate and slice off last 3 numbers to match JWT token format
  const currentDate = Number(
    Date.now()
      .toString()
      .split("")
      .splice(0, 10)
      .join("")
  );

  // Decode JWT token if it exists
  if (token) {
    decodedToken = decode(token);
  }

  // Compare current token expiration date to current date/time minus one hour
  const loggedInStatus = decodedToken.exp > currentDate - 86400 / 24;

  // Return logged in status
  return loggedInStatus;
};
