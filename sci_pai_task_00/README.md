# Podstawy JavaScriptu: zadania

***

```
Wykonaj następujące zadania:

- [ ] Zadanie_0: Podstawowy plik html.
- [ ] Zadanie_1: Skrypt wyświetlający napis w konsoli.
- [ ] Zadanie_2: Przyciski i ich obsługa.
- [ ] Zadanie_3: Element i zmienienie jego zawartości.
- [ ] Zadanie_4: Licznik kliknięć.
```

## Rozwiązanie
Wynikiem rozwiązania jest plik źródłowy (html oraz js), który zawiera implementacje aplikacji internetowej. Pliki umieścić w katalogu o nazwie `pai_js_zadanie_00`. Każde zadanie powinno być zacommitowane na branchu.

***

## Zadanie_0 - szczegóły
- Plik o nazwie `index.html`.
- Zawiera head oraz body.
- Zawiera tytuł strony jako `pai_js_zadanie_00`.
- Uwzględni `charset` z wartością `UTF-8`

## Zadanie_1 - szczegóły
- Plik main.js.
- Dodać plik skryptowy do pliku html.
- Napis to `Hello World`.
- Sprawdzić, czy napis wyświetla się w konsoli przeglądarki (F12 -> zakładka `Console`)

## Zadanie_2 - szczegóły
- Dodać do strony przycisk. Jest to tag `button`.
- Zaimplementować funkcję, która wyświetla w konsoli event. Event będzie przekazywany w pliku html.
- Zrobić commit w gitcie.
- Dodać kolejny przycisk, który będzie wyświetlać przekazany parametr ze strony html.

## Zadanie_3 - szczegóły
- Dodać do strony nowy element, który wyświetla napis. (może być to `div`)
- Dodać przycisk, który będzie zmieniał jego napis.
- Dodać funkcję w java scripcie, która będzie pobierać element za pomocą `document.getElementById`
- Zmienić zawartość elementu za pomocą `innerText`.
- Po sprawdzeniu czy działa zrobić commit.
- Zmienić zawartość elementu, aby dodać przycisk (wykorzystaj do tego `innerHTML`)

## zadanie_4 - szczegóły
- Dopisać funkcjonalność, tak aby uzyskać prosty licznik.
- Dwa przyciski (dodawanie wartości o 1, odejmowanie wartości o 1)