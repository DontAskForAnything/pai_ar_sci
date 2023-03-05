## Project: calculator
---
1. Wykorzystaj szablon aplikacji react-app, która znajduje się na dysku sieciowym.
1. Możesz utworzyć nowy projekt (nie zalecane na komputerach SCI).
1. W komponencie `Application` zaimplementuj konstruktor, który wywoła konstruktor klasy bazowej oraz utworzy stan początkowy, w którym będzie znajdować się wartość: `2137`.
1. Wartość ze stanu należy przekazać dzięki atrybutom do następujących komponentów: `DisplayHexadecimal`, `DisplayDecimal`, `DisplayOctal`, `DisplayBinary`.
1. W odpowiednim komponencie zaimplementuj algorytm, który zamienia liczbę dziesiętną na binarną, osemkową lub szesnastkową.
    - możesz użyć też funkcji toString(), lecz przeczytaj w dokumentacji jak tego się używa.
1. Sprawdź, czy twoja konwersja działa poprawnie, kiedy zmienisz wartość w stanie.
1. Uwórz w komponencie funkcję, która przyjmuje jeden parametr (jest to wartość), która będzie aktualizować stan aplikacji.
1. Przekaż tą funckję jako `callback` do komponentu o nazwie `Keypad`.
1. Zaimplementuj obsługę przycisku `=`, który będzie generował wartość w przedziale od `128` do `4096`.
1. Obłsuga przycisku musi wywołać callback, tak, aby wygenerowana wartość była przekazana do komponentu aplikacji.
1. Sprawdź, czy wartość jest prawidłowo przekazywana.
1. Utwórz nowy komponent o nazwie Information, jest to kolumna w której będziesz wyświetlał liczby oraz operatory.
1. Zaimplementuj obsługę przycisków, tak, aby można było tworzyć działania matematyczne.
1. Podgląd działania komponentu information znajdziesz na gifie.
    ![](assets/zadanie_10.gif)

---

Możesz zapoznać się z algorytmem odwrotnej notacji polskiej.