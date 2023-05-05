# Instalacja

- Uzupełnij plik `.env` i utwórz bazę danych z wybraną nazwą.
- Nie musisz tworzyć żadnej tabeli - zostanie ona utworzona automatycznie przy starcie serwera.

- Aby uruchomić front-end, wykonaj następujące kroki:

```bash
    cd client
    npm i
    npm start
```

- Aby uruchomić back-end, wykonaj następujące kroki:

```bash
    cd server
    npm i
    npm start
```

- Aby skorzystać z aplikacji, musisz mieć uruchomioną bazę danych MySQL (najlepiej użyć XAMPP).

# Budowanie aplikacji To-Do List z użyciem Reacta i Expressa z użyciem MySQL i uploadem obrazków w formacie Base64

### Opis

W tym projekcie zbudujesz prostą aplikację To-Do List przy użyciu Reacta i Expressa. Aplikacja umożliwi użytkownikom dodawanie, edytowanie i usuwanie zadań, a zadania będą przechowywane w bazie danych MySQL. Użytkownicy będą także mogli dodawać obrazki, które zostaną zapisane w bazie danych w formacie Base64 i wyświetlane w momencie najechania na zadanie.

Oto główne funkcje, jakie powinna mieć aplikacja:

1. Wyświetlanie listy zadań
1. Dodawanie nowego zadania z opcjonalnym uploadem obrazka
1. Edytowanie istniejącego zadania z opcjonalnym uploadem obrazka
1. Usuwanie zadania
1. Pokazywanie przypisanego obrazka po najechaniu na zadanie

### Wymagania techniczne

1. Użyj Reacta do budowy front-endu aplikacji
1. Użyj Expressa do budowy back-endu aplikacji
1. Użyj MySQL do przechowywania zadań
1. Użyj Axios do wykonywania żądań HTTP między front-endem a back-endem
1. Użyj Multera do obsługi uploadu plików
1. Przekonwertuj uploadowany obrazek na ciąg znaków Base64 przed zapisaniem go w bazie danych

### Instrukcje krok po kroku

1. Utwórz nowy projekt przy użyciu Create React App
1. Zainstaluj niezbędne zależności dla Expressa, MySQL, Axios i Multera
1. Utwórz plik server.js i skonfiguruj podstawowy serwer Express
1. Utwórz bazę danych MySQL i nawiąż połączenie z nią
1. Utwórz tabelę w bazie danych, aby przechowywać zadania i ich obrazki w formacie Base64
1. Utwórz API route w Expressie, aby pobrać wszystkie zadania z bazy danych
1. Utwórz komponent w React, aby wyświetlić listę zadań
1. Utwórz formularz w React, aby dodać nowe zadania, w tym z opcjonalnym uploadem obrazka
1. Przekonwertuj uploadowany obrazek na ciąg znaków Base64 i dołącz go do żądania API, aby dodać nowe zadanie
1. Utwórz API route w Expressie, aby dodać nowe zadanie i zapisać dane obrazka w bazie danych w formacie Base64
1. Utwórz formularz edycji w React, aby edytować istniejące zadania, w tym z opcjonalnym uploadem obrazka
1. Przekonwertuj uploadowany obraz do łańcucha base64 i dołącz go do żądania API, aby zaktualizować istniejące zadanie
1. Utwórz API route w Expressie, aby zaktualizować istniejące zadanie i przechowywać dane obrazu zakodowane w base64 w bazie danych
1. Utwórz przycisk usuwania w React, aby usunąć zadania
1. Utwórz API route w Expressie, aby usunąć zadanie z bazy danych
1. Użyj CSS, aby wyświetlić załączony obrazek po najechaniu na zadanie

### Kryteria oceny:

1. Ukończenie wszystkich wymaganych funkcjonalności
1. Czysty, czytelny kod z odpowiednim komentarzem
1. Właściwe wykorzystanie komponentów React i zarządzanie stanem
1. Właściwe wykorzystanie tras Express i zapytań do bazy danych
1. Właściwe wykorzystanie żądań HTTP pomiędzy front-endem a back-endem
1. Właściwe użycie Multera do wysyłania plików
1. Właściwa konwersja przesłanego obrazu na ciąg znaków base64
1. Właściwe użycie CSS do wyświetlania załączonego obrazu po najechaniu na zadanie
