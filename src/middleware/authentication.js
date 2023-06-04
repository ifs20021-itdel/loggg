// import jwt from 'jsonwebtoken'
// import * as dotenv from 'dotenv'

// dotenv.config()

// const auth = async (req, res, next) => {
//     const authHeaders = req.headers['authorization'];
//     if (!authHeaders) {
//         return res.status(401).json({ message: 'Please Authentication' });
//     }
//     try {
//         const token = authHeaders.split(' ')[1];
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         req.email = decoded.email;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: 'Invalid token' });
//     }
// }

// export default auth

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Harap autentikasi terlebih dahulu' });
  }
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.email = decoded.email;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token tidak valid' });
  }
};

export default auth;
