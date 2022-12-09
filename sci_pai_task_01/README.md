# Programowanie aplikacji internetowych: zadania_01
## Zadania
```
Rozwiąż zadania używając html i javascript:
- [ ] Zadanie_0: Utworzenie widoku w html.
- [ ] Zadanie_1: Implementacja obsługi kontrolek.
- [ ] Zadanie_2: Utworzenie tabelki i wypełnienie jej danymi.
- [ ] Zadanie_3: Rozszerzenie tabelki i jej danych.
```

## Rozwiązanie
*Wszystkie rozwiązania proszę zaimplementować w następujących plikach: index.html, main.js.*

***

## Zadanie_0 - szczegóły
- implementacja widoku w `html`, która składa się on z czterech elementów:
    - `select`
    - `slider`
    - `color picker`
    - `text`
- w trakcie dodawania elemetów dodaj unikalny atrybut `id`, dzięki niemu będziesz mógł się dostać do elementu z poziomu js
- podgląd: \
    ![](assets/zadania_00_html_view.PNG)
## Zadanie_1 - szczegóły
- implementacja skryptu javascript:
    - należy napisać prosty moduł, który będzie wykonywał poniższe zadania
    - należy wypełnić `dropdown list` dwoma elementami:
        - prosty
        - pochyły
    - napisać obsługę zmiany wartości na kontrolkach, tak aby:
        - `dropdown list` modyfikował styl czcionki elementu `tekst`
        - `slider` modyfikował rozmiar czcionki elementu `tekst`
        - `color picker` modyfikował kolor czcionki elementu `tekst`
- Do zadania należy wykorzystać następujące funkcje:
    - `document.getElementById`
    - `document.createElement`
    - `{element}.appendChild`
    - `{element}.style.{nazwa_właściwości_css}`

## Zadanie_2 - szczegóły
- poniżej znajduje się linijka kodu, która jest zapisana w postaci JSON: \
    `const json = `{"items":{"item":[{"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0002","type":"donut","name":"Raised","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0003","type":"donut","name":"Old Fashioned","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0004","type":"bar","name":"Bar","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7001","name":"None","addcost":0},{"id":"7002","name":"Custard","addcost":0.25},{"id":"7003","name":"Whipped Cream","addcost":0.25}]}},{"id":"0005","type":"twist","name":"Twist","ppu":0.65,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"}]},{"id":"0006","type":"filled","name":"Filled","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5007","type":"Powdered Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7002","name":"Custard","addcost":0},{"id":"7003","name":"Whipped Cream","addcost":0},{"id":"7004","name":"Strawberry Jelly","addcost":0},{"id":"7005","name":"Rasberry Jelly","addcost":0}]}}]}}`;`
- należy wykorzystać odpowiedni moduł, aby uzyskać dostęp do danych w języku javascript
- podstawowa wersja tabelki ma posiadać trzy kolumny:
    - id
    - type
    - name
- podgląd: \
    ![](assets/zadania_00_table_base.PNG)
- Do zadania należy wykorzystać następujące funkcje:
    - `JSON.parse()`
    - `document.getElementById`
    - `document.createElement`
    - `{element}.appendChild`
    - `{tablica}.forEach((item, index, array) => {})`

## Zadanie_3 - szczegóły
- rozszerzenie tabelki polega na dodaniu dwóch kolumn
    - batter
    - topping
- podgląd (niepełne zdjęcie): \
    ![](assets/zadania_00_table_extend_0.PNG) \
    ![](assets/zadania_00_table_extend_1.PNG)