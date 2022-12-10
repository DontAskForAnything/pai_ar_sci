# Nodejs: express: middleware, body-parser, express.Router
## Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Utworzenie middleware, który będzie wyświetlał informacje (prosty logger),
- [ ] Zadanie_1: Instalacja gotowego middleware do logowania informacji (logger),
- [ ] Zadanie_2: Wykorzystanie body-paresera jako middleware + testowanie,
- [ ] Zadanie_3: Parametry (query string oraz url parameters),
- [ ] Zadanie_4: Nagłówek: Content-Type (`multipart/form-data; boundary=<calculated when request is sent>`, `application/x-www-form-urlencoded`, `application/json`)
- [ ] Zadanie_5: Utworzenie express.Router oraz podłączenie go do aplikacji,
- [ ] Zadanie_6: Implementacja funkcji z kodem html, która wyświetla informacje z parametrów.

***

## Zadanie_0 - szczegóły
- Link do dokumentacji: [click](http://expressjs.com/en/guide/using-middleware.html)
- Dodatkowe middlewary, które będziemy korzystać: [click](http://expressjs.com/en/resources/middleware.html) \
    ![](./assets/zadanie_08/middleware.jpg)
- Middleware jest to funkcja, która jest wykonana w określonym czasie oraz wykonuje określone zadanie. To ty decydujesz w jakiej kolejności mają się wykonywać middleware. Masz możliwość utworzenia własnego, który bedzie realizował określone zadanie, które musi zostać wykonane przed obsłużeniem żądania przez routing, a później controler.
- tworzenie middleware polega na utworzeniu funkcji, która posiada 3 parametry (req, res, next). Req i res znasz, ponieważ są to dane, które otrzymujesz przy żądaniu do serwera oraz obiekt res, który obsługuje odpowiedź do klienta. Next, jest to parametr, który uruchamia następnego middleware.
```js
const middleware_logger = (req, res, next) => {
    // prosty logger (wyświetla datę, http metoda, http url)
    console.log(new Date(), req.method, req.url);
    // wywołanie następnego middleware
    next();
};

// dodanie middleware do aplikacji
application.use(middleware_logger);

// możliwość jest dodania middleware do specjalnej ścieżki (endpoint)
// application.use('/test', middleware_logger);
```
- zapomocą `application.use` umożliwa dodanie middleware do aplikacji
    - dodatkow można ustawić middleware do specjalnej ścieżki

## Zadanie_1 - szczegóły
- link do dokumentacji: [click](http://expressjs.com/en/resources/middleware/morgan.html)
- `npm install --save morgan`, komenda pobiera oraz dodaje moduł `morgan` do projektu
- `const morgan = require('morgan')`, wczytujemy moduł `morgan`
- morgan(format, options) -> funkcja oraz jej parametry
    - format (sposób wyświetlania informacji):
        - combined
        - common
        - dev
        - short
        - tiny
    - options (dodatkowe opcje):
        - skip (możliwość ukrywania logów)
        - stream (możliwość zapisywania logów w pliku lub innego streama, domyślnie jest to strumień na konsolę)
- `application.use(morgan('tiny'));`, dodanie middleware do aplikacji
- rozszerzenie middleware `morgan` poprzez dodanie opcji skip (wygłuszenie wszystkich logów, które nie spełniają kodu statusu, czyli są mniejsze niż 400 to wtedy logów nie będzie): \
```js
application.use(morgan('tiny', {
    "skip": (req, res) => res.statusCode < 400,
}));
```

## Zadanie_2 - szczegóły
- link do dokumentacji: [click](http://expressjs.com/en/resources/middleware/body-parser.html)
- body-parser, middleware, który parsuje dane przychodzących żądań przed routingiem, a wszystkie dane po parsowaniu znajdują się w właściwości `req.body`,
- `npm install --save body-parser`, komenda pobiera oraz dodaje moduł `body-parser` do projektu,
- `const bodyParser = require('body-parser')`, wczytujemy moduł `body-parser`,
- dodaj do aplikacji obsługę żądania `POST` oraz wyświetl w nim właściwość `req.body`
    ```js
    // method route (POST, /parsowanie)
    application.post('/parsowanie', (req, res) => {
        // wyświetlenie wszystkich nagłówków żądania
        console.log(`parsowanie(header):`, req.headers);
        // wyświetlenie właściwości body w konsoli
        console.log(`parsowanie:`, req.body);

        let obj = {
            "status_message": "ok",
            "status_code": 0,
        };

        // wysłanie wiadomości do clienta
        // res.json (automatycznie konwertuje obiekt js do postaci json)
        // to samo, uda się osiągnąć za pomocą JSON.stringify
        // ale za pomocą funkcji json, automatycznie zostaną dodane nagłówki
        res.json(obj);

        // ręczne ustawienie tego, co automatycznie dzieje się pod funkcją json
        // res.status(200);
        // res.setHeader('Content-Type', 'application/json');
        // res.send(JSON.stringify(obj));
    });
    ```
- w aplikacji `postman`, ustaw następujące parametry:
    - metodę: POST
    - adres: url, który zostanie obsłużony przez serwer
    - Body:
        - raw
        - typ: JSON
        ```JSON
        {
            "tekst": "test",
            "wartosc": 1.0,
            "tablica": [0, 1, 2, 3],
            "obiekt": {
                "a": 0,
                "b": 1
            }
        }
        ```
    ![](./assets/zadanie_08/postman_json.PNG)
- jak można zauważyć w konsoli, wyświetla się `undefined`
- aby wykorzystać middleware, który umożliwi parsowanie body: \
```js
application.use(bodyParser.json());
```
- po dodaniu middleware `body-parser`, można zauważyć, że pole req.body wyświetla obiekt, który został przesłany w żądaniu

## Zadanie_3 - szczegóły
- [What is the difference between URL parameters and query strings?](https://stackoverflow.com/questions/39266970/what-is-the-difference-between-url-parameters-and-query-strings)
- parametry url:
    - nodejs, przy dodawaniu obsługi ścieżki żądania posiada dodatkowy element, który umożliwia wyciągnięcie parametru z url
        ```js
        // GET route path to `groups/abcde` resource
        application.get('/groups/:group_name', function (req, res) {
            // parametry są przechowywane w właściwości żądania
            // req.params["{nazwa_parametru}"]
            let info = 'Group page: ' + req.params["group_name"];
            res.send(info);
        })
        ```
    - parametry mogą być opcjonalne więc, jeśli będziesz potrzebował opcjonalnego parametru, wystarczy dodać `?` na koniec nazwy parametru
- query strings:
    - nodejs, umożliwia również wczytanie wszystkich parametrów z query
        ```js
        // utworzenie hadlera, który obsłuży zapytanie GET na ścieżce /group
        application.get('/group', function (req, res) {
            // przygotowanie ciała (body) odpowiedzi, kiedy bedzie błąd
            let error = {
                "error_code": 184,
                "error_message": "parameters missing",
            }

            // sprawdzenie, czy query posiada jakieś elementy
            if (Object.keys(req.query).length === 0) {
                // ustawienie kodu błędu
                res.status(400);
                // wysłanie wiadomości zwrotnej w postaci json
                res.json(error);
            }

            // sprawdzneie czy query posiada określone parametry
            // to od ciebie bedzie zależeć, czy umieścisz te 2 warunki w jednym, ponieważ jest taka możliwość
            if ((req.query["name"] === undefined) || (req.query["test"] === undefined)) {
                res.status(400);
                // uzycie funkcji assign, która łączy 2 obiekty (nadpisuje te same klucze)
                // można wykorzystać bezpośrednio nadpisanie poprzez operator =
                Object.assign(error, {
                    "error_message": "name or test parameter missing",
                })
                res.json(error);
            }

            // wyciągnięcie parametrów z właściwości req.query oraz utworzenie wiadomości do klienta
            let info = `Group page (query string): name(${req.query["name"]}), test(${req.query["test"]})`;
            res.send(info);
        });
        ```
    - `http://127.0.0.1:3000/group?name=nazwa_grupy&test=1234` - url który możesz przetestować powyższy kod
    - zakodowane parametry (prosty kod, który ma wyświetlić zakodowany url):
        ```js
        application.get('/query', function (req, res) {
            let info = `Query page: q(${req.query["q"]})`;
            res.send(info);
        });
        ```
    - `http://127.0.0.1:3000/query?q=This%20is%20a%20simple%20%26%7C!%23%20short%20%3F%3F%20test.` - url, który posiada zakodowany parametr q
    - Na stronie pojawił się następujący tekst: `Query page: q(This is a simple &|!# short ?? test.)`
    - nodejs automatycznie dekoduje parametry, które są wysłane za pomocą URL

## Zadanie_4 - szczegóły
- w Zadaniu_2 użyłeś body-parser do parsowania contentu, który był oznaczony nagłówkiem: `Content-Type: application/json`
- Jedna dodatkowa informacja o `Content-Type`, pamiętaj, że ten nagłówek jest używany do żądań oraz odpowiedzi
    - [The Content-Type Header Field](https://www.w3.org/Protocols/rfc1341/4_Content-Type.html)
- `application/x-www-form-urlencoded`, jest to również sposób na przekazywanie informacji poprzez body, odbywa się tak samo jak `query string` za pomocą URL
    ```js
    application.post('/form-endpoint', (req, res) => {
        console.log(`form-endpoint(header):`, req.headers);
        console.log(`form-endpoint:`, req.body);

        let obj = {
            "status_message": "ok",
            "status_code": 0,
        };
        res.json(obj);
    });
    ```
- do testowania wykożystaj aplikację `postman`:
    ![](./assets/zadanie_08/postman_x_www_form_urlencoded.PNG)
- w konsoli wyświetlą się nagłówek, który został wysłany przez klienta oraz pusty obiekt(lub undefined) z właściwości req.body
- problem jest taki sam jak w przypadku body, który został wysłany za pomocą JSON
- aby umożliwić parsowanie body z wykorzystaniem `x-www-form-urlencoded` należy dodać dodatkowy middleware:
    ```js
    application.use(bodyParser.urlencoded({extended: true}));
    ```
    - Opcja rozszerzona pozwala na wybór pomiędzy przetwarzaniem danych zakodowanych w URL za pomocą biblioteki querystring (kiedy extended jest ustawione na false) lub biblioteki qs (kiedy extended jest ustawione na true)
        - moduł `querystring` jest wbudowany w nodejs
        - moduł `qs`: [link](https://www.npmjs.com/package/qs#readme)
    - aby przekazać tablicę za pomocą query string:
        ![](./assets/zadanie_08/postman_x_www_form_urlencoded_array.PNG)

## Zadanie_5 - szczegóły
- tworzenie routerów umożliwia nam utrzymanie przejrzystości kodu oraz rozdzielenie pewnej funkcjonalności na poszczególne pliki
- często buduje się ruter aby przypisać określoną funkcjonalność kontrolerów do poszczególnych method HTPP, które są obsługiwane w aplikacji
- można tworzyć wiele routerów, zależy od potrzeb
- każdy router, posiada różne możliwości implementacji:
    - route methods
    - route paths
    - route()
- zawsze do tworzenia routera, potrzebujemy wczytać moduł `express`
    ```js
    const express = require('express');

    // Tworzenie routera, czyli wywołanie klasy Router z modułu express
    const router = express.Router();
    ```
- następne implementacja jest podobna jak dla aplikacji
    - wykorzystujemy funkcje odpowiadające metodą HTTP
        - get
        - post
        - put
        - delete
        - itd.
    - funkcje tak samo przyjmują 2 parametry
        - path (ścieżka)
        - callback(request, response)
    ```js
    // dodanie obsługi root path dla routera, metoda get
    router.get("/", (req, res) => {
        res.send("Root path for router controler(GET)");
    });

    // dodanie obsługi root path dla routera, metoda post
    router.post("/", (req, res) => {
        res.send("Root path for router controler(POST)");
    });

    // dodanie obslugi routera dla ścieżki /router
    application.use("/router", router);
    ```
    - testowanie za pomocą:
        - przeglądarka (tylko `get`): `http://127.0.0.1:3000/router`
        - postman (get i post): `http://127.0.0.1:3000/router`

## Zadanie_6 - szczegóły
- zaimplementuj 3 funkcje, które zostaną wywołane w odpowiednim routerze
- funkcje mają przyjąć parametry, które będą przekazana za pomocą:
    - query string
    - body - json
    - body - x-www-form-urlencoded
- tematyka jest dobrowolna (może być to profil użytkownika, przepis na ciasto lub inne)
- zaimplementuj osobny router dla każdej funkcji, tak aby przećwiczyć wykorzystanie routera w twojej aplikacji