# Behringer EDGE Patch Advisor

Eine minimalistische Web-App fuer inspirierende Patch- und Parameter-Vorschlaege fuer den Behringer EDGE.

## Funktionen

- Patch-Kategorien wie Kick Drum, Bassline, Acid-artige Sequenz und Experimental Groove
- Zufallsbasierte Vorschlaege pro Kategorie
- Parameter-Startwerte fuer wichtige EDGE-Regler
- 8-Step-Sequencer fuer Pitch und Velocity
- Visuelle Patch-Kabel zwischen Patchbay-Punkten
- Performance-Tipps fuer Live-Tweaks

## Lokal starten

Die App besteht nur aus statischen Dateien:

- `index.html`
- `style.css`
- `app.js`

Zum lokalen Testen kann ein einfacher Webserver genutzt werden, zum Beispiel:

```bash
python3 -m http.server 4173
```

Danach ist die App unter `http://127.0.0.1:4173/index.html` erreichbar.

## GitHub Pages

Das Repo ist fuer GitHub Pages ueber GitHub Actions vorbereitet.

Nach dem ersten Push auf `main`:

1. In GitHub das Repo `Tenensounds/edge-patch-advisor` oeffnen.
2. `Settings` -> `Pages` aufrufen.
3. Als Build- und Deployment-Quelle `GitHub Actions` bestaetigen, falls GitHub das noch nicht automatisch gesetzt hat.
4. Den Workflow `Deploy GitHub Pages` einmal durchlaufen lassen.

Die oeffentliche URL ist danach voraussichtlich:

`https://tenensounds.github.io/edge-patch-advisor/`

## Hinweis

Alle Werte sind Startpunkte und sollten nach Gehoer an Setup, Tempo und Mix angepasst werden.
