import axios from 'axios';

export default axios.create({
  baseURL: 'https://food-backend-eaq6.onrender.com',
});

//"start": "node ./backend/server.js",
//"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
