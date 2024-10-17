import { redirect } from "react-router-dom";

function getAuthToken() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!token) {
    return null;
  }

  return token;
}

function checkGuestLoader() {
  const token = getAuthToken();
  if (token) {
    return redirect("/");
  }
  return token;
}

function tokenLoader() {
  return getAuthToken();
}

export { checkGuestLoader, tokenLoader };
