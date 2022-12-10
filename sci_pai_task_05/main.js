const express = require('express');
const application = express();
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = express.Router();
const port = 3000;

const server = application.listen(port, () => {
  console.log(`Server working at port: ${port}`);
});

//Zadanie_6
//string
router.get("/myData",  function (req, res) {
    let error = {
        "error_code": 184,
        "error_message": "parameters missing",
    }

    if (Object.keys(req.query).length === 0) {
        res.status(400);
        res.json(error);
    }

    if ((req.query["name"] === undefined) || (req.query["iq"] === undefined)) {
        res.status(400);
        Object.assign(error, {
            "error_message": "name or iq parameter missing",
        })
        res.json(error);
    }
    res.send(`Your name is ${req.query["name"]}, and your iq is: ${req.query["iq"]}`);
});

//json
application.use(bodyParser.json());
router.post('/myJson', (req, res) => {
    let error = {
        "error_code": 184,
        "error_message": "parameter name missing",
    }
    if(req.body.name){
        let obj = {
            "status_message": "ok",
            "status_code": 0,
            "your_request" : req.body
        };
        res.json(obj);
   }
    res.json(error);
});

// x-www-form-urlencoded
application.use(bodyParser.urlencoded({extended: true}));
router.post('/myXXX', (req, res) => {
    if(req.body.name){
        let error = {
            "error_code": 184,
            "error_message": "We don't need your name bro",
        }
        res.json(error);
    }
    let obj = {
        "status_message": "ok",
        "status_code": 0,
    };
    res.json(obj);
});

// application.use(bodyParser.urlencoded({extended: true}));

application.use("/task", router)
// Zadania od 0 do 5
//Router 
// router.get("/", (req, res) => {
//     res.send("Root path for router controler(GET)");
// });

// router.post("/", (req, res) => {
//     res.send("Root path for router controler(POST)");
// });

// application.use("/router", router);

// //Url
// application.get('/query', function (req, res) {
//     let info = `Query page: q(${req.query["q"]})`;
//     res.send(info);
// });

// application.get('/str/:string?', function (req, res) {
//     let info = 'Group page: ' + req.params["string"];
//     res.send(info);
// })

// application.get('/group', function (req, res) {
//     let error = {
//         "error_code": 184,
//         "error_message": "parameters missing",
//     }

//     if (Object.keys(req.query).length === 0) {
//         res.status(400);
//         res.json(error);
//     }

//     if ((req.query["name"] === undefined) || (req.query["test"] === undefined)) {
//         res.status(400);
//         Object.assign(error, {
//             "error_message": "name or test parameter missing",
//         })
//         res.json(error);
//     }
//     let info = `Group page (query string): name(${req.query["name"]}), test(${req.query["test"]})`;
//     res.send(info);
// });


// // BodyParser
// application.use(bodyParser.json());
// application.post('/parsowanie', (req, res) => {
//     console.log(`parsowanie(header):`, req.headers);
//     console.log(`parsowanie:`, req.body);

//     let obj = {
//         "status_message": "ok",
//         "status_code": 0,
//     };
//     res.json(obj);
// });
// application.use(bodyParser.urlencoded({extended: true}));
// application.post('/form-endpoint', (req, res) => {
//     console.log(`form-endpoint(header):`, req.headers);
//     console.log(`form-endpoint:`, req.body);

//     let obj = {
//         "status_message": "ok",
//         "status_code": 0,
//     };
//     res.json(obj);
// });


// // Morgan
// application.use("/morgan_logger" ,morgan('tiny', {
//     "skip": (req, res) => res.statusCode < 400,
// }));

// // Default logger
// const middleware_logger = (req, res, next) => {
//     console.log(new Date(), req.method, req.url);
//     next();
// };

// application.use('/def_logger', middleware_logger);