# free games list

# Teilnehmer

```
Timo Holder           32847

Tobias Niedermaier    32900
```

# "Cloud": [vue.rwuwu.de](https://vue.rwuwu.de/)

[![Preview Screenshot](https://rwuwu.de/rV6eL7)](https://vue.rwuwu.de/)

# How to setup / laufen lassen

```
npm install

npm run serve
```

# Beschreibung / Architektur

Die Vueapp wurde mittels der API von [freetogame](https://www.freetogame.com) umgesetzt. Da deren API direkt CORS-geschützt ist und wir nicht mit einem Reverse Proxy arbeiten wollten haben wir einfach die CORS-Variante über [rapidapi](https://rapidapi.com/digiwalls/api/free-to-play-games-database) genutzt.

Die Website ist schlicht, dennoch "modern" gehalten und einfach zu bedienen.

## App.vue

Hauptcomponent → implementiert Navbar.vue, Game.vue und GameInfo.vue components.
Hält die Game liste (Erhalten von Navbar.vue) und rendert damit ein Grid voller Game-Components.
Updatet beim Klick auf ein Game-Component die GameID die an GameInfo.vue gebunden ist.

## Navbar.vue

![Navbar Image](https://rwuwu.de/rWCSUW)

Navbar oben, ist für die Datenbeschaffung/Sortierung zuständig. Schickt bei Updates der Gameliste ein Updateevent an App.vue, dass dort abgefangen wird. Erlaubt auch das Navigieren der Seite mittels Suche und versteckten nach Oben "Knopf" hinter des Logos.

## Game.vue

![Game Image](https://rwuwu.de/0K2TOc)
![Game Image mit Hover](https://rwuwu.de/FIlhKw)

Erhält ein Element des Interfaces GameType.ts und zeigt erstmal nur das Thumbnail an.
Beim Drüberhovern werden weitere Informationen angezeigt. Öffnet beim Klick die GameInfo.

## GameInfo.vue

![GameInfo Image](https://rwuwu.de/24oTif)

Beobachtet die gameID Property und stellt bei Update dieser eine neue Anfrage an die API um die entsprechenden Informationen über das gewünschte Spiel zu holen und in ein Interface des GameInfoTypes zu speichern um diese Anzuzeigen. Implementiert zusätzlich das Gallerycomponent (Weiter unten)

## Gallery.vue

![Gallery Image](https://rwuwu.de/sfWPhb)

Erhält eine Screenshotliste über ein Interface in GameInfoType.ts und stellt diese unter der Beschreibung und anderen Informationen in der GameInfobox dar.

## Interfaces

- GameType.ts
  - Wird von der Gameliste als Interface für die Liste genutzt → enthält Resultset der API mit allen Spielen
- GameInfoType.ts
  - Auf Anfrage der GameInfo.vue wird hier das Interface für alle Informationen für ein bestimmtes Spiel gespeichert

# Icons:

[Controller](https://iconscout.com/icon/controller-2819179)

[Lupe](https://iconscout.com/icon/magnifying-glass-3604345)

[Chevron](https://iconscout.com/icon/chevron-down-1485703)

# Fremdcodebestandteile:

CSS Grid-Template Magie (Games ansicht): [CSS-Tricks](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

vue-window-size Plugin: [npmjs](https://www.npmjs.com/package/vue-window-size)
