export const checkCartOwnership = (req, res, next) => {
  const { cid } = req.params;
  const { cart } = req.user;

  if (cart !== cid) {
    return res.status(403).json({
      message: "No tienes acceso a este carrito",
    });
  }
  next();
};
