Aby uruchomić odpal server używająć `node ./server/server.js` a plik front/App.js wrzuć do projektu reactowego i odpal frontend

# programowanie_zaawansowanych_aplikacji_webowych

Zadania należy zaimplementować z wykorzystaniem `node.js` oraz językiem programowania `javascript`.
- Projekt klientowy, można zaimplementować za pomocą framework: `react`, `angular`, `vue` lub czysty `html + js`.
    - nie można wykorzystać żadnych bibliotek dodatkowych
- Projekt serwerowy, tylko czysty `node.js`, bez żadnych frameworków.

## Klient - strona html + js
- strona po wczytaniu za pomocą przeglądarki musi pobrać dane z serwera
    - wysyłane jest żądanie typu `GET` do serwera
- można na początku wykorzystać poniższe dane, do wygenerowania tabelki
    ```js
    const data = {
        "users":[
            { firstName : "John", lastName : "Doe" },
            { firstName : "Anna", lastName : "Smith" },
            { firstName : "Peter", lastName : "Jones" },
        ],
    };
    ```
- tabelka musi zawierać następujące kolumny:
    - Lp.
    - Imię
    - Nazwisko
    - Akcje
- kolumna `Akcje`, musi zawierać następujące stany:
    - pierwszy stan: dwa przyciski (najlepiej jako ikonka) =>
        - `Edytuj`
        - `Usuń`
    - drugi stan (po naciśnięciu przycisku `Edytuj`) => dwa przyciski (najlepiej jako ikonka) =>
        - `Akceptuj`
        - `Anuluj`
- przycisk `Edytuj` => zamienia kolumny `Imię` i `Nazwisko` z zwykłego tekstu na pole do wprowadzania tekstu, dodatkowo zmienia kolumnę `Akcje` na nowe przyciski (stan II)
    - po kliknięciu `Akceptuj`:
        - wysyłane jest żądanie typu `PUT` do serwera, tak aby pola po stronie serwera zostały zmienione
        - zmienia kolumnę `Akcje` na nowe przyciski (stan I) 
        - aktulizuje tabelę, tak aby dane były poprawnie wyświetlane
    - po kliknięciu `Anuluj`:
        - zmienia kolumnę `Akcje` na nowe przyciski (stan I) 
        - aktulizuje tabelę do stanu początkowego
- przycisk `Usuń` =>
    - wysyłane jest żądanie typu `DELETE` do serwera, tak aby pole po stronie serwra zostało usunięte
    - aktulizuje tabelę
- nad tabelką, znajduje się przycisk: `Dodaj nowego użytkownika`
    - po kliknięciu, przycisk jest zamieniany na dwa pola, dzięki którym można wprowadzić tekst
        - Imię
        - Nazwisko
    - dodatkowo tworzony jest przycisk `Dodaj`
        - po naciśnięciu przycisku, wysyłane jest żądanie do serwera typu `POST`, które ma dodać nowe dane,
        - aktulizuje tabelę

## Serwer - node.js
- przechowuje dane w pamięci aplikacji (RAM):
    ```js
    const data = {
        "users":[
            { firstName : "John", lastName : "Doe" },
            { firstName : "Anna", lastName : "Smith" },
            { firstName : "Peter", lastName : "Jones" },
        ],
    };
    ```
- tworzy serwer (port: `8080`), który reguje na następujące metody HTTP:
    - `GET` -> wysyła tabelkę jako JSON lub x-www-urlencoded
    - `POST` -> odbiera informacje oraz dodaje nowego użytkownika do tablicy asocjacyjnej
    - `DELETE` -> usuwa odpowiedniego użytkownika z tablicy asocjacyjnej
    - `PUT` -> modyfikuje odpowiedniego użytkownika w tablicy asocjacyjnej
- dodatkowo, serwer powinien obsługiwać zapytania tylko na endpointcie `pzaw_zadanie_03`

---
## Dodatkowe informacje:
- aby uniknąć problemu z `CORS` czyli Cross-Origin Resource Sharing
    - należy wysyłać dodatkowe informacje w nagłówku: `Access-Control-Allow-Origin: *`
- aby wysyłać żądania do serwera, należy wykorzystać funkcję `fetch`