# Nodejs: instalacja frameworka express i nodemon
## Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Modyfikacja struktury plików/katalogów,
- [ ] Zadanie_1: Instalacja expressa oraz nodemon,
- [ ] Zadanie_2: Konfiguracja nodemon,
- [ ] Zadanie_3: Implementacja serwera za pomocą frameworka express.
- [ ] Zadanie_4: Prosta obsługa żądań HTTP.
- [ ] Zadanie_5: Obsługa pliku html.

***

## Zadanie_0 - szczegóły
- Uruchom terminal w katalogu `pai_sem2`,
- Wprowadź następujące polecenie w konsoli: \
`touch package.json` - jest to polecenie, które utworzy pliku o nazwie `package.json`, plik jest potrzebny do opisania zależności projektu, który będzie obsłużony przez npm (node package manager), więcej informacji znajdziesz w dokumentacji: [link](https://docs.npmjs.com/cli/v7/configuring-npm/package-json),
- Przepisz kod, który wypełni podstawowe informacje
```json
{
  "name": "sci_pai_server",
  "version": "1.0.0"
}
```

## Zadanie_1 - szczegóły
- Instalacja frameworku do nodejs za pomocą npm odbywa się poprzez wykorzystanie polecenia w terminalu:
    - `npm install --save`, to polecenie umożliwia instalację modułu do naszego projektu, przełącznik `--save`, dodaje nasz moduł automatycznie do pliku konfiguracyjnego (nie jest on wymagany od wersji npm 5.0.0)
    - używaj tego polecenia, zawsze jeśli twój projekt musi posiadać ten moduł do uruchomienia twojego serwera
    - `npm install --save-dev`, polecenie również instaluje modułu, ale dodaje je do specjalnej grupy zależności, które przy instalacji na produkcji (serwer docelowy), nie potrzebują ich do uruchomienia, często są to testy jednostkowe lub aplikacje wspomagające programowanie
- Wprowadź następujące polecenie w konsoli: \
`npm install --save express`, instaluje framework express do naszego projektu
- Wprowadź następujące polecenie w konsoli: \
`npm install --save-dev nodemon`, instaluje dodatkową aplikację, która wspomoże rozwój aplikacji, poprzez automatyczne uruchamianie serwera, gdy pliki zostaną zmodyfikowane (takie samo rozwiązanie jesteście wstanie uzyskać przy wykorzystaniu [rsync](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/), ale po co się męczyć jak mamy gotowy moduł)

## Zadanie_2 - szczegóły
- npm umożliwia wykonywanie skryptów, które są zdefiniowane w `package.json`
- definiowanie skryptów rozpoczyna się od dodanie właściwości `scripts` w obiekcie jsonowym w pliku `package.json`
- `scripts` również jest obiektem
- dodaj poniższy kod do pliku `package.json`, który będzie odpowiedzialny za uruchomienie nodemon z głównym plikiem serwera:
```json
  "scripts": {
    "start": "nodemon ./main.js"
  }
```
- wykonanie skryptu poprzez nmp odbywa się przy wykorzystaniu terminala: \
`npm start` lub `npm run start`

## Zadanie_3 - szczegóły
```js
// import modułu express
const express = require('express');
// utworzenie aplikacji poprzez framework express
const application = express();

// ustawienie zmiennej port: 3000
const port = 3000;

// uruchomienie nasłuchiwania serwera na dany port oraz ustawienie callbacka, który zostanie wywołany jeśli nasłuchiwanie powiedzie się
const server = application.listen(port, () => {
  console.log(`Server working at port: ${port}`);
});
```

## Zadanie_4 - szczegóły
- Routing odnosi się do sposobu, w jaki punkty końcowe aplikacji (URI) odpowiadają na żądania klienta.
- jest kilka sposobów ([link](http://expressjs.com/en/guide/routing.html)):
    - **route methods** (metoda ścieżki wywodzi się z jednej z metod HTTP i jest dołączona do instancji aplikacji):
        ```js
        // GET method route
        application.get('/', function (req, res) {
            res.send('GET request to the homepage');
        });

        // POST method route
        application.post('/', function (req, res) {
            res.send('POST request to the homepage');
        });
        ```
    - **route paths** (ścieżki trasy, w połączeniu z metodą żądania, definiują punkty końcowe, do których mogą być kierowane żądania. Ścieżki trasy mogą być łańcuchami, wzorcami łańcuchów lub wyrażeniami regularnymi):
        ```js
        // GET method route to root path
        application.get('/', function (req, res) {
            res.send('root');
        });

        // GET route path to `about` resource
        application.get('/about', function (req, res) {
            res.send('about');
        });
        ```
        - route paths with parameters (ścieżki tras mogą posiadać parametry, dzięki którym dokładniej precyzują o jaki zasób chodzi). Aby utworzyć parametr w ścieżce, należy przed nim wstawić następujący znak: `:`.
        ```js
        // GET route path to `groups/abcde` resource
        application.get('/groups/:group_name', function (req, res) {
            let info = 'Group page: ' + req.params["group_name"];
            res.send(info);
        })
        ```
    - **application.route()**, dzięki temu można utworzyć łańcuchowe obsłużenie zapytań metodowych pod daną ścieżką
        ```js
        application.route('/book')
            .get(function (req, res) {
                res.send('Get a random book');
            })
            .post(function (req, res) {
                res.send('Add a book');
            })
            .put(function (req, res) {
                res.send('Update the book');
            });
        ```
    - **express.Router**, zostanie to użyte i omówione w kolejnych zadaniach, ale w skrócie jest to klasa, która umożliwia tworzenie mniejszych modułów, które są odpowiedzialne za tworznie roterów, które obsługują pewien zakres ścieżek i łatwo się je podłącza do głównej aplikacji. Jest używany aby poszczegolne api znajdowało się w osobnym pliku.
- zadanie polega na użyciu powyższych sposobów, tak aby przetestować jak działają, wymyśl własne endpointy, tak aby wszystkie zostały sprawdzone
- do metod HTTP GET wystarczy wykorzystać przeglądarki
- do innych metod, wykorzystaj zainstalowaną aplikację `postman`

## POSTMAN
![](./assets/zadanie_07/postman.png)
1. Dodanie nowej karty, w której możesz definiować nowe żądania,
2. Wybór metody HTTP,
3. Wpisanie adresu serwera: `http://127.0.0.1:3000/` (ten adres będziesz mógł wykorzystać, kiedy serwer node js będzie uruchomiony),
    - pamiętaj, że w adresie możesz dopisywać swoje endpointy, które są obsługiwane przez serwer,
4. Wysłanie żądania,
5. Lista dodatkowych parametrów, które możesz wykorzystywać podczas tworzenia żądań (będzie ona potrzebna, kiedy będziesz wysyłał bardziej skomplikowane żądania)

## Zadanie_5 - szczegóły
- utwórz 3 pliki html w katalogu, w którym znajduje się serwer,
- zaimplementuj obsługę 3 żądań, które będą wysyłane za pomocą metody `GET`,
- wykorzystaj metodę `sendFile`, która znajduje się w parametrze `res`, podczas osbługi zapytań,
    - parametrem funkcji `sendFile` jest ścieżka do pliku
    - pamiętaj o podawaniu ścieżki do plików, która jest ścieżką absolutną
    - utworzenie ścieżki absolutnej:
        - wczytaj moduł, który nazywa się `path`
        - wykorzystaj funkcję `join`
        - pierwszym parametrem, musi być `__dirname`, jest to zmienna globalna, która umożliwia pobranie całej ścieżki do katalogu w którym został uruchomiony główny plik przez `node.js`
        - `path.join(__dirname, "./index.html")`