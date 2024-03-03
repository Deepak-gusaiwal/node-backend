class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode || 500;
    this.name = this.constructor.name;
    this.data = null;
    this.success = false;
    this.errors = this.errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// class CustomError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.name = this.constructor.name;
//     this.statusCode = statusCode || 500;
//     Error.captureStackTrace(this, this.constructor);
//   }
// }
