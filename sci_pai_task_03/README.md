# JavaScript: operacje na tablicy
## Zadanie jest obowiązkowe

Wykonaj następujące zadania:

- [ ] Zadanie_0: Pobierz szablon zadania.
- [ ] Zadanie_1: Wyświetl każdy element tablicy w konsoli.
- [ ] Zadanie_2: Potęga liczby 2.
- [ ] Zadanie_3: Wprowadzanie elemntów do tablicy.
- [ ] Zadanie_4: Filtrowanie tablicy.
- [ ] Zadanie_5: Wypełnienie tablicy.
- [ ] Zadanie_6: Szukanie elementu w tablicy.
- [ ] Zadanie_7: Usuwanie elementu tablicy.

***

## Rozwiązanie
Wynikiem rozwiązania jest plik źródłowy (html oraz js), który zawiera implementacje aplikacji internetowej. \
Pliki umieścić w katalogu o nazwie `sci_pai_task_03`. Każde zadanie powinno być zacommitowane na branchu.

***

## Zadanie_0 - szczegóły
- Pliki znajdują się w katalogu `assets/task_03`
- Jest to: `index.html`, `main.js`.
- Zmień nazwę katalogu na poprawną, czyli na `sci_pai_task_03`.
- Zacommituj zmiany.

## Zadanie_1 - szczegóły
- wykorzystaj metodę [`foreach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript) na tablicy.
- zaimplementuj funkcję, która wyświetli element w konsoli.
- Zacommituj zmiany.

## Zadanie_2 - szczegóły
- tablica `arr` zawiera wykładniki, które posłużą do potęgowania.
- wykorzystaj metodę [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript) na tablicy.
- zaimplementuj funkcję, która utworzy potęgę liczby 2
- do tworzenia potęgi, wykorzystaj pętlę for
- *Przypomnienie: potęgowanie to operacja będąca uogólnieniem wielokrotnego mnożenia*
- Wynik wyświetl w konsoli (console.log(result))
- Zacommituj zmiany.

## Zadanie_3 - szczegóły
- utwórz pustą tablicę
- wykorzystaj pętlę for z zakresem `od 0 do 100 000`
- sprawdź, czy indeks pętli jest podzielny przez `99`, wykorzystaj do tego operator `%`
- jeśli tak, to element dodaj do tablicy za pomocą metody [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Wynik wyświetl w konsoli (console.log(result))
- Zacommituj zmiany.

## Zadanie_4 - szczegóły
- tablica `arr` zawiera obiekty, które posiadają pole o nazwie `id`
- na tablicy wykorzystaj metodę, która nazywa się [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- zaimplementuj funkcję, tak aby uzyskać obiekty z polem id w przedziale `[30; 100]`
- Wynik wyświetl w konsoli (console.log(result))
- Zacommituj zmiany.

## Zadanie_5 - szczegóły
- Utwórz tablicę, która zawiera 10 000 pustych obiektów
- Do utowrzenia tablicy wykorzystaj klasę [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Do wypełnienia tablicy wykorzystaj metodę [`fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Wynik wyświetl w konsoli (console.log(result))
- Zacommituj zmiany.

## Zadanie_6 - szczegóły
- tablica `arr` zawiera klika słów
- sprawdź czy tablica zawiera słowo `naczynie` za pomocą metody [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- jeśli tablica będzie zawierać to słowo, znajdź indeks za pomocą metody [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript), jak nie to przypisz do wyniku null
- wykorzystaj operator [`?`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- Wynik wyświetl w konsoli (console.log(result))
- Zacommituj zmiany.

## Zadanie_7 - szczegóły
- tablica `arr` zawiera kilka obiektów
- wyszukaj indeks elementu tablicy, która posiada obiekt z `id: 124`, wykorzystaj do tego metodę [`findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- zaimplementuj funkcję tak, aby sprawdzała id
- usuń element za pomocą metody [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Wynik
Obrazek przedstawia wynik działania aplikacji internetowej: \
    ![](assets/task_03_results.PNG)
