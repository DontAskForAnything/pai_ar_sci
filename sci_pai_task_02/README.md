# Programowanie aplikacji internetowych: zadania_02
## Zadania
```
Rozwiąż zadania używając html i javascript:
- [ ] Zadanie_0: Utworzenie widoku w html.
- [ ] Zadanie_1: Implementacja obsługi kontrolek.
- [ ] Zadanie_2: Utworzenie tabelki i wypełnienie jej danymi.
- [ ] Zadanie_3: Implementacja alertów.
```

## Rozwiązanie
*Wszystkie rozwiązania proszę zaimplementować w następujących plikach: index.html, main.js.*

***

## Podgląd działania aplikacji internetowej
![](assets/task_02_preview.gif)

***

## Zadanie_0 - szczegóły
- implementacja widoku w html, która składa się on z kilku elementów:
    - Napis/paragraf, który przedstawia tytuł gry
    - Kontener z napisami: `Punkty: ` oraz miejsce na liczbę punktów
    - Kontener z przyciskami: `Dobieram kartę`, `Restart`, `Podgląd`
    - Kontener z kartami
    - Tabelka, która zawiera następujący nagłówek:
        - Lp.
        - Data
        - Punkty

## Zadanie_1 - szczegóły
- implementacja skryptu, która będzie realizować następujące kroki (najlepiej prosty moduł):
    - funkcja, która tworzy nową kartę (obiekt html), dodaje punkty, aktualizuje punkty
    - funkcja, która usuwa stworzone karty, resetuje punkty, aktualizuje punkty
    - funkcja, która generuje kartę lub jej dane, tak aby na najechanie na przycisk `Podgląd`, można było zobaczyć jaka karta zostanie dodana

## Zadanie_2 - szczegóły
- rozszerzenie skryptu, dokładnie funkcji, która jest przypisana do przycisku `Restart`, tak, aby dodawać nowy wiersz w tabelce z odpowiednimi danymi
- pamiętaj, aby nie dodawać danych do tabelki, kiedy wynik/punkty są równe `0`

## Zadanie_3 - szczegóły
- rozszerzenie skryptu, dokładnie funkcji, która jest przypisana do przycisku `Dobieram kartę`, tak, aby sprawdzała, czy użytkownik już przekroczył magiczną liczbę punktów `21`
    - jeśli nie, to gra dalej
    - jeśli tak, to nie może dodawać nowej karty oraz wyświetli się komunikat w przeglądarce za pomocą `alert`
    - dokumentacja do funkcji alert: [link](https://www.w3schools.com/jsref/met_win_alert.asp)