export const initialUserContext = {
  isLoggedIn: false,
  role: "public",
  email: "",
  userId: 0,
  userIsBanned: 0,
  users: [],
  login: () => {},
  logout: () => {},
  refreshUsers: () => {},
};
