const jwt = require('jsonwebtoken');

function AuthEmployee(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
  const tok = token.split(' ')[1];
  try {
    const verify = jwt.verify(tok, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }
      req.user = decoded;
      next();
    });
    
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao autenticar o token', error: error.message });
  }
}

module.exports = AuthEmployee;