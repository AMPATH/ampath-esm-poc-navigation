# ampath-esm-poc-navigation

Main navigation for AMRS POC Single-SPA App

`@ampath/poc-navigation`

## Instructions

1. `npm install`
2. Run it on a certain port, `npm start -- --https --no-inline --port 8085`
3. Go to https://ngx.ampath.or.ke/amrs-backup/spa/ in a browser.
4. Now [trust all insecure localhost requests](https://superuser.com/questions/772762/how-can-i-disable-security-checks-for-localhost).
5. Open up the browser console and run the following commands:

```js
importMapOverrides.addOverride(
  "@ampath/poc-navigation",
  "https://localhost:8085/poc-navigation.js"
);
```

6. Refresh the page.
7. Login with username `admin` and password `admin123`.
8. Modify something in the navigation bar
9. In the browser, refresh the page. You should see your code modified.

## Errors and Fixes

1. Uncaught Error: Unable to resolve bare specifier "react"

```js
importMapOverrides.addOverride(
  "react",
  "https://cdn.jsdelivr.net/npm/react@16.8.6/umd/react.production.min.js"
);
```

2. Uncaught Error: Unable to resolve bare specifier "react-dom"

```js
importMapOverrides.addOverride(
  "react-dom",
  "https://cdn.jsdelivr.net/npm/react-dom@16.8.6/umd/react-dom.production.min.js"
);
```

## View import map samples

https://ngx.ampath.or.ke/import-map.json or https://openmrs-spa.org/import-map.json
