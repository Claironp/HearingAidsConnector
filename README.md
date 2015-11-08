# HearingAidsConnector

Mon application mobile permet une recherche simplifiée des accessoires pour aides auditives

Créé par Claire Pélissier.

### Comment tester sur un mac?

Ouvrir un terminal et taper:

```
git pull
npm i
```

Puis pour demarrer l'application:

```
npm start
```

L'application peut être acceder depuis `http://localhost:8888`.

### Comment tester sur l'iphone?

Ecrire le fichier `.env.json` sous le format:

```js
{
    "PHONEGAP_APPID": "something",
    "PHONEGAP_TOKEN": "something",
    "PHONEGAP_IOS_PASSWORD": "something"
}
```

Puis lancer `npm run deploy`, cela va envoyer un zip a Phonegap qui va generer l'application iphone, puis la telecharger.

Dans itunes, importer le fichier `releases/ios.ipa`, et le copier depuis itunes dans l'iphone.

