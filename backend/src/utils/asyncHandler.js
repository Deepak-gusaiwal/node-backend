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


// try to understand the above function

//1. basic function {simply returning the function}
// const fun1 = () => {
//   return (a) => {
//     console.log(a)
//   };
// };
// const response = fun1();
// response("hello")
  
// //2. return a callback function which can perform operations on passed value in original returned function
// const fun1 = (fn) => {
//   return (a) => {
//     fn(a)
//   };
// };
// const response = fun1((arg)=>{
// console.log('hey',arg)
// });
// response("hello")
export { asyncHandler };
