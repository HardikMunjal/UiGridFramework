// pages/api/login.js
export default function handler(req, res) {
    const { email, password } = req.body;
  
    // Mocked user data (replace with your authentication logic)
    const user = {
      email: 'user@example.com',
      password: 'password123',
    };
  
    if (email === user.email && password === user.password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
  