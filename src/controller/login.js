const loginUser = (req, res) => {
  // La logica di login andrà qui
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username e password sono richiesti' });
  }

  // Per ora, simuleremo un login di successo
  if (username === 'test' && password === 'password') {
    return res.status(200).json({ message: 'Login effettuato con successo', token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Credenziali non valide' });
  }
};

module.exports = { loginUser };