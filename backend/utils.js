import jwt from 'jsonwebtoken';
//In JWT a token is encoded from a data payload using a secret. 
//That token is passed to the client. 
//Whenever the client sends that token along with a request, the server validates it and sends back the response. 
export const generateToken = (user) => {
// jwt.sign(payload, secretOrPrivateKey, [options(expiresin), callback(called in caseof errors)])
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};