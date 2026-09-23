# Lokalna strona Bajkolotu

Serwis zawiera 11 podstron oraz stronę 404. Jest lokalny i nie został opublikowany.

- Podgląd: http://127.0.0.1:4318/
- Uruchomienie z tego katalogu: `node serve.mjs`
- Treści i szablon stron: `build.mjs`
- Wygenerowanie HTML po zmianie treści: `node build.mjs`
- Style, skrypt menu i grafiki: `dist/`
- Kontrola odnośników i struktury: `python3 check-site.py`

Nie są potrzebne żadne zależności npm. Serwer słucha wyłącznie na 127.0.0.1. Uruchamiając z innym Pythonem/Node, wybierz zainstalowaną wersję tych narzędzi. W tym środowisku dostępne są:

```sh
cd /Users/tomaszcedro/Desktop/bajki_app/website
/Users/tomaszcedro/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node serve.mjs
```

`dist/` zawiera komplet statycznych plików do późniejszego hostingu. Polityka `noindex,nofollow` i `robots.txt` celowo blokują indeksowanie wersji przed premierą. Nie ustawiono domeny kanonicznej ani wymyślonych linków do sklepów. Nie ma analityki, reklam, zewnętrznych fontów, cookies, logowania ani przyjmowania płatności.

## Zakres oferty

Zgodnie z decyzją właściciela: 3 bezpłatne bajki na start, następnie opcjonalna subskrypcja 49,99 zł brutto miesięcznie z pulą 30 nowych bajek. Przyjęto miesięczną pulę od dnia aktywacji bez przenoszenia niewykorzystanej puli, bez automatycznych dopłat. Te zasady trzeba wdrożyć zgodnie z opisem przed sprzedażą.

Lektor, zakupy i publiczne pobieranie są wyraźnie oznaczone jako planowane, ponieważ nie działają jeszcze w sprawdzonym prototypie.

## Dane i grafiki

Dane AZ Tomasz Cedro i adres potwierdzono 18.09.2026 na https://chcesiku.pl/privacy.html oraz https://przekazbutelke.pl/polityka-prywatnosci/. Wspólny kontakt pochodzi z drugiej witryny: tomasz@przekazbutelke.pl. Nie utworzono nowej skrzynki. Nazwy domen z dyktowanej prośby nie odpowiadały działającym stronom; właściwe adresy ustalono z istniejących projektów i zweryfikowano publicznie.

Logo i trzy ilustracje pochodzą z istniejących zasobów aplikacji. Grafiki zoptymalizowano do WebP; logo zachowano w PNG. Nie zmieniano plików aplikacji Flutter.

Sprawdź `PRZED-PREMIERA.md` przed publikacją strony i wysłaniem aplikacji do sklepów.
