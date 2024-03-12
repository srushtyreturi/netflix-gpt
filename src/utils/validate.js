export const checkValidData = (email, password, fullName) => {
  const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/.test(password);

  const checkName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);

  if (fullName !== null && !checkName) {
    return "Full Name is not valid!!!";
  } else if (!checkEmail) {
    return "Email ID is not valid!!!";
  } else if (!checkPassword) {
    return "Password is not valid!!!";
  } else {
    return null;
  }
};
