export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.status = statusCode || 500;
  error.message = message;
  return error;
};
