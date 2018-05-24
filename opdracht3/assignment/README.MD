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

@supports (scroll-behavior: smooth) {
  * {
    scroll-behavior: smooth;
  }
}


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

* My fallback for add `.attachEvent`

```JS
if (document.getElementById && document.getElementsByTagName && document.attachEvent) {
  var input = document.getElementById("myInput");
  input.attachEvent('onkeyup', myFunction);

  function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var dd = ul.getElementsByTagName("dd");
    for (var i = 0; i < dd.length; i++) {
      var a = dd[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        dd[i].style.display = "";
      } else {
        dd[i].style.display = "none";
      }
    }
  }
}
```
_Note: the application actually better this way i noticed bugs when I did it diffrently but this actually supports ie8 perfectly_

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
- On IE8 I really didn't want to do that much crazy things but for what it's worth, it WORKS :tada:.
- On IE9 it's a bit of the same experience on ie8 but it actually works a bit smoother. Details still don't work properly but if you go on a details page you actually want to see everything.
- On IE10 Animations start to work now! You can see the progression on the page. Filter works properly and you view everything.
- On IE11 it's the same experience mostly but you get a hint of the middle browser experience. You can click and it will open the quick view version.
- On Microsoft Edge I found no problems and it works just as great!


### Firefox
![Firefox windows 7 v16 ](docAssets/firefox-windows-16.jpg)
_Firefox_

![Firefox windows 7 latest ](docAssets/firefox-windows-latest.jpg)
_Firefox_

##### Notes
* There were no bugs found. with or without JS & CSS.

### Safari
![Safari](docAssets/safari-1.png)

#### Notes
* There were no bugs found. with or without JS & CSS.
* tabbing was a bit weird in safari. I couldn't reach the website with tabbing.

### Chrome
![chrome windows 7 v22 ](docAssets/chrome-windows-latest.jpg)
_Firefox_

![Chrome windows 7 latest ](docAssets/chrome-windows-latest.jpg)
_Firefox_

#### Notes
- on v22 it works pretty good! Really solid! even the on clicks
- latest the chrome shows here Sticky and scroll works smoothly

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
