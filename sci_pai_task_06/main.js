const express = require('express');
const application = express();
const path = require('path');
const port = 3000;

const server = application.listen(port, () => {
  console.log(`Server working at port: ${port}`);
});

application.use('/static', express.static(path.join(__dirname, '/public')));


application.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./html/imgFile.html"))
});


const handle404 = (req, res) => {
    let www = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>pai_error_404</title>
        </head>
        <body>
            <center>
            <p>pai</p>
            <p>404 - page not found</p>
            <p>Metoda: ${req.method}</p>
            <p>URL: ${req.url}</p>
            </center>
        </body>
    </html>
    `;
    res.status(404);
    res.send(www);
};

application.use(handle404);

const handlerInternalError = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500);
    res.send("Error 500 - Internal server error.");
};
application.use(handlerInternalError);
