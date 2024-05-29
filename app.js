 // app.js 
 const express = require('express');
 const path = require('path');
 // Импортируем библиотеку
 const bodyParser = require('body-parser');
 const mainRoute = require('./routes/main');
 const gamesRouter = require('./routes/games'); 
 
 const PORT = 3000;
 const app = express();
 
 // Настраиваем миддлвар-функцию bodyParser
 app.use(
     bodyParser.json(),
     express.static(path.join(__dirname, 'public')),
     mainRoute,
     gamesRouter
 ); 
 
 app.listen(PORT, () => {
     console.log(`Server is running at PORT http://localhost:${PORT}`);
 })
 
     