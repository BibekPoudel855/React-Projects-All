function validateForm(username, fullName, email, password, confirmPassword) {
  if (!username || !fullName || !email || !password || !confirmPassword) {
    alert("Please fill all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  return true;
}

export function validateEmailPSW(email, password) {
  if (!email || !password) {
    alert("Please fill all fields.");
    return false;
  }
  return true;
};
export default validateForm;
