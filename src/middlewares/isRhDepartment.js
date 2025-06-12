require('dotenv').config();


module.exports = (req, res, next) => {
  const user = req.user;
  if (user.role === 'admin') {
      return next();
    }
    console.log(user.role);
  if (!user || (user.role !== 'rh' && user.role !== 'admin')) {
  return res.status(403).json({
    message: 'Acesso negado: apenas usuários do departamento RH ou com permissões de administrador podem acessar este recurso.'
  });
}

  next();
}