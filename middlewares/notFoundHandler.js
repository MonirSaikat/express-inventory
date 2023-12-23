function notFoundHandler(req, res, next) {
  res.status(404);
  res.json({
    status: 404,
    message: 'Not Found',
  })
};

module.exports = notFoundHandler;