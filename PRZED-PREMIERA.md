# Gotowość do publikacji - stan 18.09.2026

Strona jest gotowa do lokalnego przeglądu. Sama witryna nie oznacza, że prototyp aplikacji spełnia już wszystkie wymagania App Store i Google Play.

## Przygotowane adresy

| Cel | Ścieżka |
| --- | --- |
| Marketing URL | `/` |
| Support URL | `/pomoc/` |
| Privacy Policy URL | `/polityka-prywatnosci/` |
| Warunki korzystania / subskrypcji | `/regulamin/` |
| Usuwanie danych poza aplikacją | `/usun-dane/` |
| Cennik | `/cennik/` |

Po publikacji trzeba użyć pełnych, publicznych adresów HTTPS, bez logowania i blokady geograficznej. Lokalny adres 127.0.0.1 nie nadaje się do formularzy sklepowych.

## Konkretne rzeczy pozostające przed zgłoszeniem

1. **Architektura produkcyjna.** Aktualny prototyp używa klucza OpenAI podawanego na telefonie. Zastąpić go serwerowym generowaniem, uwierzytelnianiem uprawnień, limitami kosztów i kontrolą dostępu. Nie dystrybuować prywatnego klucza w aplikacji. README projektu zawiera także wcześniejsze zalecenie rotacji ujawnionego klucza; przed premierą zweryfikować wykonanie, nie odczytując jego wartości.
2. **Zakupy.** Wdrożyć produkty App Store / Google Play, 3 bezpłatne generowania, 30 poprawnie zapisanych bajek na miesięczny okres, odnowienia, anulowanie i odtwarzanie zakupów. Zweryfikować zachowanie przy błędach generowania, wykorzystaniu puli, wygaśnięciu i zmianie urządzenia. Obecne `pubspec.yaml` nie zawiera integracji zakupów.
3. **Lektor.** Zaimplementować rzeczywiste audio i ujawnić dostawcę oraz zakres danych albo pozostawić oznaczenie „planowane” i nie sprzedawać tej funkcji. Aktualny `reader_screen.dart` tylko symuluje odtwarzanie.
4. **Treści AI i rodziny.** Wdrożyć kontrolę treści i dostępne wewnątrz aplikacji zgłaszanie treści. Przed wysyłaniem danych do zewnętrznego AI przedstawić zrozumiałą informację i uzyskać wymaganą zgodę. Sama polityka na stronie nie zastępuje zgody ani kontroli treści. Skonfigurować odbiorców i ocenę wieku według faktycznego sposobu użycia; tekst „dla rodziców” sam nie rozstrzyga stosowania zasad dla dzieci.
5. **Konta i usuwanie.** Obecny prototyp nie ma kont. Jeżeli pojawią się w produkcji, potrzebne będzie usuwanie konta i powiązanych danych w aplikacji oraz dostępny z WWW proces żądania usunięcia. Zaktualizować `/usun-dane/` do faktycznie wdrożonego procesu, a także określić retencję serwera i kopii zapasowych.
6. **Finalne dokumenty.** Po ustaleniu produkcyjnego przepływu danych uzupełnić dostawców, konkretne okresy retencji/logów, transfery i hosting. Obecna polityka rzetelnie opisuje lokalny prototyp, a regulamin oznacza płatną ofertę jako planowaną. Potwierdzić wspólny adres wsparcia lub zastąpić działającą skrzynką Bajkolotu. Zweryfikować finalne warunki konsumenckie z rzeczywistym procesem zakupowym.
7. **Publikacja strony.** Wybrać domenę, opublikować komplet `dist/`, zweryfikować HTTPS i odpowiedzi 200 wszystkich adresów prawnych, dodać canonical i mapę strony. Zmienić noindex/robots dopiero przy publicznym uruchomieniu. Dodać tylko rzeczywiste linki sklepowe po uzyskaniu ich w konsolach.
8. **Formularze sklepowe i aplikacja.** Dodać linki do prywatności, pomocy i regulaminu w aplikacji i metadanych. Wypełnić App Privacy i Data safety na podstawie ostatecznego kodu, SDK i backendu. Dane firmy muszą odpowiadać listingowi. Przekazać recenzentom działającą wersję i potrzebny dostęp.

## Źródła

- [Apple App Review Guidelines: 3.1.2, 5.1.1, 5.1.2 i zasady dla dzieci](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play: User Data, polityka prywatności i usuwanie kont](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [Google Play: AI-generated content](https://support.google.com/googleplay/android-developer/answer/13985936?hl=en)
- [Google Play: subskrypcje](https://support.google.com/googleplay/android-developer/answer/9900533?hl=en)
- [Apple: anulowanie subskrypcji](https://support.apple.com/pl-pl/118428)
- [Google: zarządzanie subskrypcjami](https://support.google.com/googleplay/answer/7018481?hl=pl)
- [RODO](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pl)

Nie wykonano wdrożenia, zakupów, konfiguracji produktów ani zgłoszenia do recenzji. Pliki Flutter pozostały bez zmian.
