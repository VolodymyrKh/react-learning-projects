export default function validateForm({ email, password }) {
  let err = {};
  if (!email) {
    err.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
      email
    )
  ) {
    err.email = "Email address is invalid";
  }

  if (!password) {
    err.password = "Password is required";
  } else if (password.trim().length < 6) {
    err.password = "Password needs min 6 characters";
  }

  return err;
}
