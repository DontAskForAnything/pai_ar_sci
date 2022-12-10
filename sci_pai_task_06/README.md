# Nodejs: express: middleware, obsługa błędów 404, obsługa błędów serwera 500 (internal server error), serwowanie plików statycznych
## Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Utworzenie middleware, który będzie wyświetlał stronę odpowiedzialną za kod 404,
- [ ] Zadanie_1: Modyfikacja middleware, odpowiedzialnego za błąd 404,
- [ ] Zadanie_2: Utworzenie middleware, który będzie obsługiwał błędy serwera (500, internal server error)
- [ ] Zadanie_3: Udostępnianie plików statycznych (pliki publiczne)

***

## Zadanie_0 - szczegóły
- obsługa błędów polega również na napisaniu middleware, domyślnie jest napisany przez express, który wysyła stronę html (pod wszystkie methody http)
- ten middleware musi być ostatnim middlewarem w aplikacji (często przypisuje się go przed wystartowaniem serwera, innaczej nasłuchiwaniem)
    ```js
    const handle404 = (req, res) => {
        // strona www, która będzie wyświetlać błąd
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
    // przypisanie middleware w aplikacji
    // musi to być ostatni middleware, ponieważ jeśli przypiszemy go szybciej, to każde żądanie będzie obsługiwany przez ten middleware
    application.use(handle404);
    ```

## Zadanie_1 - szczegóły
- często stosuje się inny sposób do obsługi błędów, które są związane z błędnym URL oraz metodą (tzn. których serwer nie może obsłużyć, ponieważ nie obsługuje tych żądań)
- takim rozwiązaniem jest przekierowania klienta na inny adres, zazwyczaj jest to przekierowanie do głównej strony naszego serwera
- przeniesienie klienta na inny adres, wykonuje się za pomocą odpowiedzi i użyciem funkcji `redirect`
  - parametrem jest path lub url na inny serwer
  - użycie `"/"` polega na przekierowanie na główną stronę serwera
    ```js
    const handle404 = (req, res) => {
        res.redirect("/");
    }
    ```

## Zadanie_2 - szczegóły
- błędy po stronie serwera mogą się pojawiać, często się je eliminuje podczas implementacji serwera oraz jego testowania, ale warto obsłużyć taki błąd
- obsługa błędów po stronie serwera również jest obsługiwana poprzez napisanie specjalnego middleware
    - jest to specjalny middleware, ponieważ posiada on 4 parametry
        - error
        - żądanie
        - odpowiedź
        - next
    - implementuje się go również jako ostatni middleware, za obsługą błędów 404
        ```js
        const handlerInternalError = (err, req, res, next) => {
            console.log(err.stack);
            res.status(500);
            res.send("Error 500 - Internal server error.");
        };
        application.use(handlerInternalError);
        ```
    - testowanie odbywa się następująco:
        - wyłącz middlewara odpowiedzialnego za obsługę błędów serwera
        - popełnij błąd w jakiejś funkcji, czy to będzie błąd składniowy, czy odwołanie się do elementu który nie istnieje
        - wejdź przez przeglądarkę lub wyślij żądanie przez postmana na ścieżkę, w której popełniłeś błąd
        - aplikacja może się zakończyć lub wyskoczy cały stack trace (czyli wszystkie funkcje, które są aktualnie wykonywane)
    - dodaj ponownie middleware, który obsługuję błąd i sprawdź jego rezultat
    - usuń błąd

## Zadanie_3 - szczegóły
- pobierz obrazek z internetu, który będziesz chciał udostępnić na swojej stronie html
- umieść obrazek w tym samym katalogu, gdzie znajduje się implementacja serwera
- napisz prostą stronę html z użyciem obrazka
- zaimplementuj ścieżkę, która zostanie obsłużona, aby wyświetlić stronę html, która zawiera odnośnik do obrazka
- sprawdź czy obrazek został wyświetlony, kiedy wejdziesz na odpowiednią ścieżkę
- sprawdź w zakładce 'Network' lub 'Sieć' (F12, tryb podglądowy do narzędzi programistycznych) co serwer próbuje zwrócić, kiedy odwołujesz się do obrazków
- plikami statycznymi nazywamy pliki, które nie są modyfikowane przez serwer, często różne elementy odnoszą się bezpośrednio do tych plików, ponieważ potrzebują ich do poprawnego wyświetlenia strony (pliki js, pliki css, obrazki i inne)
- framework express umożliwia udostępnianie plików statycznych poprzez middleware
- pierwszym krokiem jest utworzenie specjalnego katalogu, który będzie zawierał wszystkie pliki/aktywa, popularnie nosi on nazwę `public`
- przenieś obrazek do katalogu `public`
- następnie należy utworzyć middleware oraz przypisać go do aplikacji
    ```js
    // bardzo często przypisuje się wszystkie pliki statyczne do ścieżki static, aby przyspieszyć działanie wyszukiwania odpowiedniego middlewara
    application.use('/static', express.static(path.join(__dirname, '/public')));
    ```
    - zazwyczaj umieszcza się tego middleware przed przypisaniem obsługi ścieżek
    - w kodzie źródłowym musisz również zmienić ścieżkę do pliku graficznego
    ```html
    <img src="/static/{nazwa_obrazka}.jpeg"/>
    ```
- odśwież stronę, aby zobaczyć obrazek
- aktualnie również możesz mieć dostęp do obrazków bezpośrednio po adresie url
    - `http://127.0.0.1:3000/static/{nazwa_obrazka}.jpeg`