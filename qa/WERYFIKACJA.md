# Kontrola strony - 18.09.2026

## Zakres i wynik

- 11 właściwych stron + własna strona 404.
- 325 lokalnych odnośników, zasobów i kotwic: wszystkie cele istnieją.
- HTTP: wszystkie 11 tras zwraca 200; nieistniejąca trasa zwraca 404.
- Jeden nagłówek H1 na każdej stronie, język `pl`, brak powtarzających się identyfikatorów, opisy alternatywne wszystkich grafik.
- Składnia skryptu menu sprawdzona przez `node --check`.
- Układ wszystkich 11 stron w przeglądarce przy szerokościach 320, 390, 430, 768, 1366 i 1440 px: 66 kontroli, brak poziomego przepełnienia i elementów treści poza ekranem.
- Po powiększeniu najmniejszych podpisów do co najmniej 12 px i przeliczeniu wielkości tekstu na rem: ponownie sprawdzono wszystkie 11 stron przy 320 i 390 px (22 kontrole), bez błędów. Ponowna kontrola większych rozmiarów obejmowała wizualny przegląd głównych szablonów przy 1366 px.
- Obejrzano w przeglądarce stronę główną, wszystkie podstrony w telefonicznym układzie oraz układy cennika, funkcji, pomocy i regulaminu na laptopie. Obejrzano również środkowe sekcje strony głównej, ilustracje i rozwinięte FAQ.
- Menu telefonu: otwarcie, przejście do cennika, zamknięcie po wyborze; Escape zamyka menu i przywraca fokus przycisku.
- FAQ: otwarcie kliknięciem oraz zamknięcie klawiszem Enter.
- Bezpośrednia kotwica `/bajka-na-dobranoc/#opowiesc`: prowadzi do przykładowej opowieści.
- Grafiki strony głównej załadowały się po przewinięciu; obrazy poniżej pierwszego ekranu celowo używają lazy loading.

## Charakter kontroli

To kontrola lokalnej witryny w przeglądarce, z emulowanymi rozmiarami ekranów. Nie wykonano testu na fizycznym iPhonie/Androidzie ani testów samej aplikacji Flutter. Nie wysyłano wiadomości przez odnośniki e-mail i nie uruchamiano płatności.

Nie deklarujemy pełnego audytu WCAG ani zatwierdzenia przez sklepy. Ograniczenia wersji aplikacji i kroki wymagane przed publikacją są opisane w `../PRZED-PREMIERA.md`.
