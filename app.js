 
     const express = require('express');
     const fs = require("fs").promises
     const bodyParser = require("body-parser")
     
     const path = require('path');
     const mainRoute = require('./routes/main');
     const gamesRouter = require('./routes/games'); 
    const cors = require('./middlewares/cors');
     
     const PORT = 3000;
     const app = express();
     
     
     app.use(
      cors,
      bodyParser.json() ,
      express.static(path.join(__dirname , "public")),
      mainRoute,
      gamesRouter
      ); 
     
     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
      
     })
     app.get("/", (req, res) =>{
      fs.readFile("./public/index.html","Utf-8").then((data) => {
        res.header("Content-Type" , "text/html");
        res.send(data);
      });
     } );
     