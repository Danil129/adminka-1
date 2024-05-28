     // app.js 
     const express = require('express');
     const fs = require("fs").promises
     // Импортируем роутер
     const path = require('path');

     
     const PORT = 3000;
     const app = express();
     
     // Запускаем
     app.use(express.static(path.join(__dirname , "public"))); 
     
     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
     })
     app.get("/", (req, res) =>{
      fs.readFile("./public/index.html","Utf-8").then((data) => {
        res.header("Content-Type" , "text/html");
        res.send(data);
      });
     } );
     