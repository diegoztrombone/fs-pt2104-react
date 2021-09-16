export const catcher = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    return false;
  }
};
