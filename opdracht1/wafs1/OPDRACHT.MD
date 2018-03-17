# Result Assignments

- [x] Your code on Github.
- [x] Write a Readme with a description of the problem that you have encountered, how did you fix them or how could you fix them (with todo's) if you had enough time.

## Biggest problem right now.
There isn't a mobile interface right now. You can't navigate the results after you entered your search.

#### Todo
- [ ] Make a mobile friendly version.

## Network

My app doesn't have a timeout or a loader in that sense. So the user wouldn't know what is going on.

![The load on after a search]()
_The load on after a search can take a long time on low network._

If internet fails while loading the page nothing happends but when you already loaded the site and the internet fails. You get an error message. That error message isn't specific but it will let the user know "Something is wrong!". There should be a better 200 handeler.

![Error message in the app]()
_Error message in the app tested with google chrome dev network._

The CSS in the app isn't that much! But it could load a bit faster with critical CSS.

![Showing the paint of the webpage]()
_Showing the paint of the webpage on in Chrome Developer tools network_

I could fix this with critical CSS and minify my CSS to save some time and make the app a bit lighter to load!
> [Source: critical css](https://criticalcss.com/)

#### Todo


## Screenreader

How I tested the Screenreader was with macOS built-in Screenreader function. Things i noticed:

- [ ] Titles being read twice.
- [ ] Sometimes the tone of voice is kind of weird.

Tested on:
![Image of the screenreader app i use]()
_Image of the screenreader app i use_

![Image of the screenreader app i use]()
_Image of the screenreader app i use on mobile_

#### Todo

- [x] leave the `alt=""` attribute empty

## Images from the API

Having network in mind the previews you see are downsampled. This means it saves some time to get the gifs. To preview this i used the originals to preview on slow network, and preview the downsampled to show the speeds.

![original image speeds]()
_original image speeds_

![downsampled image speeds]()
_original image speeds_

- [ ] No alt tag on the images and let it read the title!
- [ ] On reduced motion show the still image. and when clicked show the downsampled image.

## localStorage - Cookies

localStorage is being used in this app. To disable your localStorage in different browsers you sometimes need to access your about.config or it's being found in your settings. [Here is a explination on how](https://stackoverflow.com/questions/17882647/can-user-disable-html5-sessionstorage#25050910).

The localStorage in this app is being used to favourite your gifs. The app stores a string that contains a JSON format to write in the localStorage. This could be stored in your cache to remember or you could have a user login and store the favourites on the server/(account).


#### Todo
- [ ] Have a database on the server.
- [ ] Saves the users favourites on the server.
- [ ] Get the Id's from the server and show them on the web.

## Javascript off
When JavaScript is off the app doesn't work there is no way this app can do it's functionality when JavaScript is off. But i could inform the user when JavaScript is off. Probably make use of <noscript> or Try to make the favourites functionality slightly work by showing you.

## Minify the code

#### Minify CSS

#### Todo

#### Minify JS

#### Todo


## Colourblind / Accessibility
The colours could use a slight redo.

#### Todo



## browsers

### Tested on Firefox
Problems i found:

#### Todo

### Tested on Opera
Problems i found:

#### Todo

### Tested on Opera Mini
Problems i found:

#### Todo

### Tested on Safari
Problems i found:

#### Todo

### Tested on Microsoft Edge
Problems i found:

#### Todo

### Tested on Internet Explorer
Problems i found:

#### Todo

### Tested on The Device Lab
Problems i found:

#### Todo

* [ ] Op mobiel de gifs ophalen als stilstaande plaatjes (indien reduced motion aanstaat).
* [ ] Splash screen.
* [ ] Service worker.
* [ ] Eerst mobile first en Critical CSS
* [ ] Javascript uit toch nog wat kunnen doen.
* [ ] Minify the code!
* [ ] Gebruik van cache!
* [ ] Focus state tweaken
  * [ ] Kleur.
  * [ ] iets subtielere animatie (reduced motion: heeft dan alsnog een focus state vanwege kleur) .



## What did i test.

<<<<<<< HEAD
- Google dev Network ![Network result](docImages/network.png)
- Google dev Audit in Dev Tools ![Results Audit](docImages/results-audit.png)

link: https://vincentkempers.github.io/wafs/app/#gifs
