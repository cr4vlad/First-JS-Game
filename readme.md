# Documentation
## Launch
To launch the game you need to download the repo, open terminal in your local repo and run:

`npm install`

`npm run first-build`

If you get errors try to run `npm audit fix`.

After that you can either run `npm start` from projects folder, or just open _public/index.html_

To start "playing" press ENTER in Game Menu.

Controls: WASD or arrows
## Notes
### init
lowerCamelCase is standard for folders and files, except of one-class-files, that only export by default 1 class, named in Camel Case.

__Assets__ are for all graphics and sounds in the game.

Folders organization from web (for assets):
*  Assets are sorted by categories (GUI, Units, Weapons, etc) first
*  Then, within those categories things are broken down into their locations in the game (Main Menu, Options Menu, etc) to make sure we what assets belong where in the game, while also aiming to keep folders from containing 20+ assets in them
*  Each major asset has a Final Asset folder (the only thing stored here is the version of the asset that is currently in the game), a WIP folder (where all in-progress and old versions of an asset are stored), and finally a Work Files folder (where all PSDs, Maya files, and other work files for that asset are stored)

__Model__ is organized by [scenes](https://dou.ua/lenta/articles/javascript-gamedev/?from=footer).

### 07.01.2020
Src structure - HMVC: Scene: model, view/, controller (index)

folders' names should use CamelCase if they contain index.js, otherwise use lowerCamelCase

assets/GUI/bg.jpg downloaded from pixabay.com

!1: Fix: npm start clean dist/ without removing folders