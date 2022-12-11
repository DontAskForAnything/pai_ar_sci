##### !! Aby zadanie działało poprawnie należy wykonać zadanie 1, gdyż musi ono zostać wygenerowanie lokalnie na danym kopmputerze !!
# Nodejs: TLS / SSL
##### Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Przygotowanie struktury katalogów,
- [ ] Zadanie_1: Utworzenie certyfikatu oraz jego klucza.
- [ ] Zadanie_2: Modyfikacja pliku `sample.env` oraz `.env`.
- [ ] Zadanie_3: Modyfikacja pliku `configuration.js`.
- [ ] Zadanie_4: Modyfikacja pliku `main.js`.

***
Dodatkowe materiały:
- [TLS vs. SSL – wszystko, co musisz wiedzieć](https://jchost.pl/blog/tls/)

***
## Zadanie_0 - szczegóły
- W terminalu wprowadź następujące polecenia:
    - `mkdir internal`
    - `cd internal`
    - `mkdir ssl`
- W pliku wypełnij `.gitignore`:
    - `internal/`
- Zacommituj zmiany

## Zadanie_1 - szczegóły
- przejdź do katalogu internal: `cd internal`
- W terminalu wprowadź następujące polecenia:
    - `openssl genrsa -out key.pem`
    - `openssl req -new -key key.pem -out csr.pem`
    - `openssl x509 -req -days 90 -in csr.pem -signkey key.pem -out cert.pem`
    - `rm csr.pem`

## Zadanie_2 - szczegóły
- Zmodyfikuj plik `sample.env`
    ```
    PORT=
    SSL_CERTIFICATE_PATH=
    SSL_PRIVATE_KEY_PATH=
    ```
- Zmodyfikuj plik `.env`
    ```
    PORT=3000
    SSL_CERTIFICATE_PATH="./internal/ssl/cert.pem"
    SSL_PRIVATE_KEY_PATH="./internal/ssl/key.pem"
    ```
- Zacommituj zmiany

## Zadanie_3 - szczegóły
- Zmodufikuj plik `configuration.js`:
    ```js
    require("dotenv").config();
    const filesystem = require('fs');

    const get_port = () => {
        const port_property = "PORT";
        const port_default = 3000;
        return undefined !== process.env[port_property] ? process.env[port_property] : port_default;
    };

    const get_ssl = () => {
        const ssl_key_property = "SSL_PRIVATE_KEY_PATH";
        const ssl_cert_property = "SSL_CERTIFICATE_PATH";
        const ssl_default = null;

        let result = ssl_default;
        if ((undefined !== process.env[ssl_key_property]) && (undefined !== process.env[ssl_cert_property])) {
            result = {
                key: filesystem.readFileSync(process.env[ssl_key_property]),
                cert: filesystem.readFileSync(process.env[ssl_cert_property]),
            };
        }

        return result;
    };

    module.exports = (() => {
        return {
            port: get_port(),
            ssl: get_ssl(),
        };
    })();
    ```
- Zacommituj zmiany


## Zadanie_4 - szczegóły
- wprowadź następujące modyfikacje:
    ```js
    const http = require("http");
    const https = require("https");
    const application = require("./application");
    const { port, ssl } = require("./configuration");

    const server = (null !== ssl)
        ? https.createServer(Object.assign({}, ssl), application)
        : http.createServer(application);

    server.listen(port, () => {
        console.log(`sample_server is running.`);
        console.log(`port: ${port}`);
        console.log(`ssl: ${null !== ssl}`);
    });
    ```
- Zacommituj zmiany