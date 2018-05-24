<h1 align="center">Contactlist.</h1>

<div align="center">
  :globe_with_meridians::pushpin::bike: <img src="https://img.shields.io/badge/BT-done-green.svg">
</div>
<div align="center">
  <strong>Readme for browser tech assignment</strong>
</div>
<br />

-------

# Contactlist
This is a contact list where you can search see a little bit of information on hover and on click you have more detailed information about the contact.

_Note: I probably should have experimented more! Due to time constraints I didn't made crazy enhancements._
[Link for the project](link thing)

## Sources
* [quirksmode table of contents about all selectors](https://quirksmode.org/dom/core/#fivemethods)
* [Impressive web CSS3 support in IE9](https://www.impressivewebs.com/css3-support-ie9/)
* [Can I Use](https://caniuse.com/)

## Browser support

### Javascript
![Support for getElementsByClassName](docAssets/getElementsByClassName.png)
_The support for getElementsByClassName_

![Support for getElementById](docAssets/getElementById.png)
_The support for getElementById_

![Support for nextsibling](docAssets/NextSibling.png)
_The support for NextSibling_

![support classList](docAssets/classlist.png)
_The support for NextSibling_

![querySelectorAll support for ie8 is incomplete](docAssets/querySelectorAll.png)
_querySelectorAll support for ie8 is incomplete but technically it works for what i need it to do._


### CSS
![vw vmin vh vmax support](docAssets/vwvhvminvmax.png)
_vw vmin vh vmax support_

![Transistions](docAssets/transitions.png)
_support CSS3 transitions_

![grid](docAssets/)


## Fallbacks

* flexbox

```CSS
element {
/* for older browsers IE9 and down the line */
  display: block;
  float: left;
  margin: 0 auto; /* or display: table;  */
/* older browser will not understand flex and ignore it.
Newer browsers wont */
  display: flex;
}
```

* Creating a fallback for JavaScript

```JS
if(document.getElementsByClassName) {
  // Run the code with get getElementsByClassName
  console.dir(document);
} else {
  // run the code with a different selector
  console.log("Not supported");
}
```


## Browser support
Because of the low Javascript usage are there only some CSS fallbacks needed to be created.
* Em's work til IE 9 without being "that" buggy.
* Usage of `display: flex;` & `display: grid;`.


## Browser tests
Ways of testing:
* My own windows machine: Internet Explorer 11 & 10/ Mozilla Firefox/ Google Chrome
* [Browserstack](https://www.browserstack.com/)
* Device Lab

### Internet explorer
![internet explorer 8](docAssets/ie8.jpg)
_ie 8_

![internet explorer 9](docAssets/ie9.jpg)
_ie 9_

![internet explorer 10](docAssets/ie10.png)
_ie 10_

![internet explorer 11](docAssets/terms-ie11.png)
_IE 11_

### Microsoft Edge
![Microsoft Edge](docAssets/edge-windows.jpg)
_Microsoft Edge_

#### Notes

### Firefox
![Firefox windows](docAssets/firefox-windows.jpg)

_Firefox_

##### Notes
* There were no bugs found. with or without JS & CSS.

### Safari
![Safari](docAssets/safari-1.png)

#### Notes
* There were no bugs found. with or without JS & CSS.
* tabbing was a bit weird in safari. I couldn't reach the website with tabbing.

### Opera mobile
![Opera Mobile](docAssets/Opera-mobile.png)
_I couldn't test the terms of service button because the Emulator crashed every time_

On opera mini the animations won't work because of the way opera works. It saves data to send "images" of de browser and it will know the coordinates of what you have clicked and show that page. Animation or transitions won't work (well) for that matter.

#### Notes
* My emulator breaks when I click the terms of service link. So i really wouldn't know if it's on my end or opera mobile really don't like the way how i handled this problem(just CSS).
* Besides that The animation is buggy, It will still show the active state but the transition is ignored(Pretty Progressive if you ask me).
* Besides that it works fine.

## Mobile browsers/ Device Lab

### Note:
The width wasn't edited of the accordion yet so this may look weird.

### Samsung phone
![Samsung phone](docAssets/samsung-phone-1.jpg)

#### Notes
* There were no bugs found.

### android phone QP
![Android qp phone](docAssets/android-phone-qp-1.jpg)

#### Notes
* There were no bugs found. You can use it as normal.

### old android phone QP
![old android qp phone](docAssets/old-android-phone-qp1.jpg)

#### Notes
* There were no bugs found. You can use it as normal.

### Nexus
![Nexus accordion](docAssets/nexus-1.jpg)

#### Notes
* Well the nexus was a one way ticket on the overlay. You couldn't press the exit button.
* This is a padding problem but the sizing isn't that "hard"-coded. the changes in value should fix this.

## Things i found
