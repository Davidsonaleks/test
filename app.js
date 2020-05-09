const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("*", (_req, res) => {
  res.end(`
    <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <div id="app"><h1>Hello World!!!</h1></div>
        </body>
        </html>`);
});

app.listen(PORT, () => console.log("Server has been started on " + PORT));
