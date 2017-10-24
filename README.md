# browserify

## pré-requis

- nodejs & npm ([nodejs.org](http://nodejs.org/))
- browserify [Browserify](http://browserify.org/)
- watchify [browserify/watchify: watch mode for browserify builds](https://github.com/browserify/watchify)
- browser-sync [Browsersync - Time-saving synchronised browser testing](https://www.browsersync.io/)
- ruby ([Le langage Ruby](https://www.ruby-lang.org/fr/))
- sass ([Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/))

## install

    git clone https://github.com/jibundeyare/epsi-lille-browserify-2017-2018.git
    cd epsi-lille-browserify-2017-2018
    npm install

## cli

Recompiler automatiquement les fichiers sass :

    sass --style compressed --watch sass:css

Recompiler automatiquement les fichiers js :

    watchify js/main.js -o js/bundle.js

Lancer un serveur web et recharger automatiquement la page :

    browser-sync start --server . --files .

