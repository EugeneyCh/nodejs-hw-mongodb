// http-errors(404, "Contact not found")

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
};
