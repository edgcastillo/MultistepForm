const setTimeForCookies = (m) => {
  return new Date(new Date().getTime() + m * 60 * 1000);
};

export default setTimeForCookies;
