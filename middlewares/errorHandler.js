exports.errorHandler = (error, req, res, next) => {
  console.log(error)
  let errorMessage = error.message? error.message: 'something went wrong, please try again'
  let errorStatus = error.status? error.status: 400
  return res.status(errorStatus).send(errorMessage)
}