# Mój server
---
## Uruchomienie serwera:
- `npm install` => komenda, która pobiera oraz instaluje wszystkie zależności dla projektu
- `sample.env` => skopiuj plik oraz usuń `sample` z nazwy pliku. Wypełnij go informacjami.

# Treść zadania:
# Nodejs: zmienne środowiskowe
## Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Utworzenie pliku `.gitignore`,
- [ ] Zadanie_1: Instalacja modułu `dotenv`,
- [ ] Zadanie_2: Utworzenie pliku `sample.env` oraz `README.md`,
- [ ] Zadanie_3: Implementacja pliku `configuration.js`,

***
## Zadanie_0 - szczegóły
- [gitignore](https://git-scm.com/docs/gitignore)
- W terminalu wprowadź następujące polecenia:
    - `touch .gitignore`
- W pliku wypełnij:
    - `node_modules/`
    - `.env`
- W terminalu wprowadź następujące polecenia:
    - `git status`
    - `git add .gitignore`
    - `git commit -m "Added gitignore file."`
    - `git push`

## Zadanie_1 - szczegóły
- [dotenv](https://github.com/motdotla/dotenv)
- W terminalu wprowadź następujące polecenia:
    - `npm install dotenv --save`
- Zacommituj zmiany

## Zadanie_2 - szczegóły
- W terminalu wprowadź następujące polecenia:
    - `touch README.md`
    - `touch sample.env`
- W pliku `sample.env` wypełnij następującymi elementami:
    ```
    PORT=
    ```
- W pliku `README.md` za pomocą języka [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) wypełnij plik:
    ```
    # Mój server
    ---
    ## Uruchomienie serwera:
    - `npm install` => komenda, która pobiera oraz instaluje wszystkie zależności dla projektu
    - `sample.env` => skopiuj plik oraz usuń `sample` z nazwy pliku. Wypełnij go informacjami.
    ```
- Zacommituj zmiany

## Zadanie_3 - szczegóły
- Wykonaj polecenie z pliku `README.md`
- Utwórz plik `configuration.js` w katalogu source.
- Zaimplementuj wykorzystanie modułu `dotenv`:
    ```js
    require("dotenv").config();

    module.exports = (() => {
        return {
            port: process.env["PORT"],
        };
    })();
    ```
- Zmodyfikuj plik `main.js`:
    - zaimportuj zmienną `port`:
        ```js
        const { port } = require("./configuration");
        ```
    - umieść zmienną `port` w odpowiednim miejscu
- Zacommituj zmiany