# devoxxma2017-pwa

> Demo for Devoxx MA 2017

* `pwa` contains the webapp source.
* `api-server` contains the source for the API server


## Build

In both directory, run `yarn` or `npm install`

## Run the demo

* Start the API server
```bash
cd api-server
npm start
```

* Application PWA
	* First, install `serve`: `npm i -g serve`
	* Then, start the server
```bash
cd pwa
npm run build && serve dist
```
