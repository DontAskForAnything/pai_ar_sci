# ReactJS: axios
## Zadanie jest obowiązkowe

***

Wykonaj następujące zadania:
- [ ] Zadanie_0: Sprawdzenie działania biblioteki `axios`,
- [ ] Zadanie_1: Sprawdzenie działania serwisu `https://random-data-api.com`,
- [ ] Zadanie_2: Wykorzystanie biblioteki `axios`,
- [ ] Zadanie_3: Utworzenie własnej instacji `axios`,
- [ ] Zadanie_4: Implementacja aplikacji obsługująca wyświetlanie danych z serwisu,

***

## Zadanie_0 - szczegóły
- Cała dokumentacja jak wykorzystać `axios` znajduje się pod tym [linkiem](https://www.npmjs.com/package/axios).
- Musisz dowiedzieć się jak wysłać następujące metody http: `get`, `post`, `delete`.
- Musisz dowiedzieć się jak wysłać zapytanie `get`, które będzie posiadało parametry w URL => np. `http://localhost:8080/endpoint?param1=value1`
- Musisz dowiedzieć się jak wysłać zapytanie `get`, które będzie wyśle zapytanie z `jsonem`.
- Musisz dowiedzieć się jak wysłać zapytanie `post`, które wyśle zapytanie z `jsonem`.
- Projekt ReactJS, który znajduje się na dystku nauczycielskim zawiera bibliotekę axios.
- Projekt ReactJS jest to czysty projekt, który został utworzony komendą `npx create-react-app project_react`.

## Zadanie_1 - szczegóły
- Zapoznaj się z działaniem serwisu pod następującym linkiem: `https://random-data-api.com/`
- Dokumentacja znajduje sie w zakładce `Documentation`
- Należy znaleźć informacje, które będą zawierały następujące informacje:
    - URL - bazowy
    - enpointy
    - jakie parametry można wysłać z endpointami
- za pomocą przeglądarki należy sprawdzić zapytania tak, aby uzyskać odpowiedzi JSON
    - warto sprawdzić jak wygląda odpowiedź dla rozmiaru 1 oraz więcej :)

## Zadanie_2 - szczegóły
- W pliku `App.js`, należy dostosować stronę tak, aby wyświetlał się przycisk, który będzie wysyłał zapytanie do serwisu z poprzedniego zadania
- zaimportuj `import axios from 'axios';` tak, aby można byłoby wykorzystać bibliotekę axios
- w trakcie naciśnięcia przycisku, należy wysłać zapytanie na losowy endpoint
- należy wyświetlić odpowiedź w konsoli przeglądarki
- przykładowy kod:
    ```js
    const handle_button = () => {
        axios.get('https://random-data-api.com/api/v2/users')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    ```

## Zadanie_3 - szczegóły
- Utwórz w projekcie katalog o nazwie `api`
- W katalogu `api` utwórz nowy plik `random_data.js`
- zaimportuj `import axios from 'axios';
- wykorzystując dokumentację z [npm](https://www.npmjs.com/package/axios#creating-an-instance) utwórz własną instację `axios`
    ```js
    const instance = axios.create({
        baseURL: 'https://random-data-api.com/api/v2',
    });
    ```
- następnie utwórz metody tak, aby odpowiadały wszystkim dostępnym endpoitom, które serwis udostępnia
    ```js
    export const users = () => {
        return instance.get('/users');
    }
    ```
- w pliku `App.js` należy zaimportować utworzone funkcje, które posiadają słowo kluczowe `export`, dzięki temu słowu, funkcja zostanie dostępna do użycia w innych plikach (jeśli zostanie zaimportowana)
    ```js
    import { users } from './api/random_data';
    ```
- funkcję `users` wykorzystaj w podobny sposób, jak to w zadaniu 2
    - zamiast `axios.get('https://random-data-api.com/api/v2/users')`
    - to `users()`

## Zadanie_4 - szczegóły
- należy przygotować aplikację webową, która będzie wyświetlała tabelkę danych zależności od wybranej kategorii
- kategoria ma być możliwa poprzez wybranie `dropdown list`, czyli html `select`
- obok `selecta` ma znajdować się pole tekstowe (tylko liczby), dzięki któremu podamy liczbę ile ma zostać pobranych danych (wykorzystaj do tego `react ref`, aby pobrać dane/wartości z pola tekstowego)
- dane, które otrzymasz z serwisu przedstaw jako tabelka z liczbą porządkową
- UWAGA: każde dane są zapisane w innym formacie
- UWAGA: każdy rodzaj danych najlepiej obsłużyć jako osobny komponent