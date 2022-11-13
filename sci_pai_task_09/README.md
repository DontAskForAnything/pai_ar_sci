## How to start

### `npm i` 
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Task Description
Zadanie polega na utworzeniu projektu strony www, która wyświetla dane. Dane można pobrać z [repozytorium](https://github.com/fanzeyi/pokemon.json). W repozytorium znajdują się dane na temat postaci ze świata `Pokemon`. Strona ma wyswietlić wszystkie dane o postaciach w podobny sposób, który został przedstawiony na rysunku poniżej (podgląd strony).

Podgląd: \
![](assets/task_09/preview.png)


Strona składa się z głównego komponentu, który bedzie zawierał komponent wyświetlania postaci `Pokemon` (który będzie znajdował się w `./components/pokemon/view.jsx`).

Chciałbym, aby wasz projekt składał się z następującej struktury (zaczynając od katalogu `src`):
- src (katalog)
    - components (katalog)
        - pokemon (katalog)
            - assets (tutaj umieść pliki: `types.json`, `pokedex.json`)
                - images (katalog)
                    - wszystkie obrazki, które znajdują się w repo: `images`
                - `pokedex.json`
                - `types.json`
            - tile.jsx (komponent, który będzie wyświetlał nazwę oraz obrazek postaci)
            - view.jsx (komponent, który będzie wyświetlał kafelki, grupy przycisków, pasek filtrowania nazwy)
        - utils (katalog)
            - toggle_button.jsx (implementacja przycisku, który posiada własny stan)
---

## Zadanie - dodatkowe informacje
- Ładowanie pliku `.json` do kodu javascrip we frameworku React:
    ```js
    // plik automatycznie został zamieniony w strukturę danych javascript
    // nie musisz parsować pliku za pomocą: JSON.parse()
    import types from './assets/types.json'
    ```
- Ładowanie obrazka dynamicznie:
    ```js
    let path = './assets/images/' + `001` + `.png`;
    return <img src={require(`${path}`)} />;
    ```
- Dodawanie zer na początku ciągu znaków: [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- ToggleButton:
    - komponent posiada własny stan, który informuje czy przycisk jest aktywny lub nie,
    - komponent powinien wywołwyać odpowiednie callbacki (`onActive`, `onDeactive`) lub jeden, który przekazuje stan
    - wyświetlanie nazwy w środku
    - podgląd: \
        ![](assets/task_09/gIcWPW4ndz.gif)
- Pasek filtrowania po nazwie:
    - wpisanie po pierwszej literce, należy przefiltrować dane do wyświetlania, możesz wykorzystać funkcję na tablicy: `filter`
- Pierwsza grupa przycisków toggle:
    - sortowanie przez nazwę (rosnąco lub malejąco)
    - sortowanie przez id (rosnąco lub malejąco)
    - jednocześnie aktywne może być tylko jedno sortowanie (nazwa lub id)
- Druga grupa przycisków jest utworzona z pliku: `types.json`, w której znajdują się typy postaci
    - w tej grupie może być kilka aktywnych przycisków
    - kiedy wszystkie przyciski są nieaktywne, to wyświetlana jest cała lista (zależy ona od poprzednich konfiguracji)
    - kiedy jeden przycisk jest aktywny, to lista jest przefiltrowana przez typ

