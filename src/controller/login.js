const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  // La logica di login andrà qui
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username e password sono richiesti' });
  }

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    // Genera un token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login effettuato con successo', token });
  } catch (error) {
    console.error('Errore durante il login:', error);
    return res.status(500).json({ message: 'Errore interno del server' });
  }
};

module.exports = { loginUser };