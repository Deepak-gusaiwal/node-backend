const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); // Call the asynchronous function passed to asyncHandler
    } catch (error) {
      // If an error occurs, handle it here
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export { asyncHandler };
