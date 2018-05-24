<h1 align="center">Contactlist.</h1>

<div align="center">
  :tada: <img src="https://img.shields.io/badge/Browser Tech-done-green.svg">
</div>
<div align="center">
  <img src="docAssets/header-image.png" alt="product">
  <strong>A browser technologies assignment</strong>
</div>
<br />

-------

## Contactlist
This is a contact list where you can search see a little bit of information on hover and on click you have more detailed information about the contact.

All data is collected via FakerJS and can dynamically updated. When the server restarts there is new data.

_Note: I probably should have experimented more! Due to time constraints I didn't made crazy enhancements._
[Link for the project](link thing)

## How to start
* Clone the repo [here](https://github.com/VincentKempers/browser-technologies.git).
* Navigate to `/opdracht3/assignment`
* Go to the terminal and type `npm install`.
* To run:
  * The development enviroment `npm run dev`.
  * The production `npm start`.

## Redo

| First try | Second try     |
| :------------- | :------------- |
| I had nothing | Figure out how the `@supports` work |
| "" | FakerJS, Dynamic Data, Templating |
| "" | Figure out what to make and how it will take shape |
| "" | IE **partial 7**,**8**,9,10,11 support |
| "" | Progressive enhancements (middle tier browsers) |
| "" | Progressive enhancements (Animations) |
| "" | Rewrite es6 to es5 |

## Sources
* [quirksmode table of contents about all selectors](https://quirksmode.org/dom/core/#fivemethods)
* [Impressive web CSS3 support in IE9](https://www.impressivewebs.com/css3-support-ie9/)
* [Can I Use](https://caniuse.com/)
* [https://www.bram.us/](https://www.bram.us/2016/10/31/checking-if-a-browser-supports-es6/)
* [Feature detection by Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

## Browser support

### Javascript

![Support for getElementsByClassName](docAssets/getElementsByClassName.png)
_The support for getElementsByClassName_

![Support for getElementById](docAssets/getElementById.png)
_The support for getElementById_

![support classList](docAssets/classlist.png)
_The support for NextSibling_

![querySelectorAll support for ie8 is incomplete](docAssets/querySelectorAll.png)
_querySelectorAll/querySelector support for ie8 is incomplete but technically it works for what i need it to do._

### CSS
![vw vmin vh vmax support](docAssets/vwvhvminvmax.png)
_vw vmin vh vmax support_

![Transistions](docAssets/transitions.png)
_support CSS3 transitions_

![grid](docAssets/grid.png)
_support display: grid_

## Fallbacks

* Fonts
```CSS
@font-face {
  font-family: 'openSans-bold';
  src: url('fonts/OpenSans-Bold.eot'); /* IE9 Compat Modes */
  src: url('fonts/OpenSans-Bold.ttf')  format('truetype'); /* Safari, Android, iOS */
}
```

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

## ES6 fallback

snippet from: [https://www.bram.us/](https://www.bram.us/2016/10/31/checking-if-a-browser-supports-es6/)

```JS
var supportsES6 = function() {
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();

if (supportsES6) {
  var script = document.createElement("script");
  script.src = "my-es6-file.js";
  document.head.appendChild(script);
}
```

Unfortunatly this didn't work for me so i re-wrote everything back to ES5.

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
<details>
<summary> Internet explorer </summary>
![Internet Explorer 7](docAssets/ie7.png)
_IE 7_

![internet explorer 8](docAssets/ie8.png)
_ie 8_

![internet explorer 9](docAssets/ie9.png)
_ie 9_

![internet explorer 10](docAssets/ie10.png)
_ie 10_

![internet explorer 11](docAssets/ie11.png)
_IE 11_
</details>

### Microsoft Edge
<details>
<summary> microsoft edge </summary>
<img src="docAssets/edge-windows.png">
_Edge Windows_
</details>


#### Notes
* On IE7 it works for the most part only the part that doesn't really work is the onclick.
* On IE8 I really didn't want to do that much crazy things but for what it's worth, it WORKS :tada:.
* On IE9 it's a bit of the same experience on ie8 but it actually works a bit smoother. Details still don't work properly but if you go on a details page you actually want to see everything.
* On IE10 Animations start to work now! You can see the progression on the page. Filter works properly and you view everything.
* On IE11 it's the same experience mostly but you get a hint of the middle browser experience. You can click and it will open the quick view version.
* On Microsoft Edge I found no problems and it works just as great!

### Firefox
<details>
<summary> Firefox v16 & latest </summary>

<img src="docAssets/firefox-windows-16.png">
_Firefox v16_

<img src="docAssets/firefox-windows-latest.png">
_Firefox latest_

</details>

##### Notes
* There were no bugs found. with or without JS & CSS.

### Safari
<details>
<summary> Safari </summary>
<img src="docAssets/safari-1.png">
<img src="docAssets/safari-2.png">
_Safari_
</details>

#### Notes
* There were no bugs found. with or without JS & CSS.
* tabbing was a bit weird in safari. I couldn't reach the website with tabbing.

### Chrome

<details>
<summary> chrome v22/ latest </summary>
<img src="docAssets/chrome-v22.png">
_Chrome v22 (a very old version)_

<img src="docAssets/chrome-latest.png">
_Chrome latest_
</details>

#### Notes
* on v22 it works pretty good! Really solid! even the on clicks.
* latest the chrome shows here Sticky and scroll works smoothly.

### UC Browser

<details>
<summary> UC browser </summary>
<img src="docAssets/uc-browser-pad.png" alt="UC Browser on a device from 2013">
<img src="docAssets/uc-browser-click.png" alt="UC Browser on a device from 2013">

_UC Browser on a device from 2013_

</details>

### Notes
* It works!
* The emulation ran a bit slow so i couldn't really tell if there were animations. The browser doesn't really support animations but it works solid.

## Mobile browsers/ Device Lab

### Samsung phone
<details>
<summary> Samsung phone </summary>
<img src="">
<h3> Notes</h3>
<ul>
  <li>This works fine</li>
</ul>
</details>

### android phone QP
<details>
<summary> Android QP </summary>
<img src="">
<h3> Notes</h3>
<ul>
  <li>This works fine</li>
</ul>
</details>

### old android phone QP
<details>
<summary> older android QP </summary>
  <img src="">
<h3> Notes</h3>
<ul>
  <li>This works fine</li>
</ul>
</details>

### Nexus
<details>
<summary> Nexus test </summary>
<img src="">
<h3> Notes</h3>
<ul>
  <li>This works fine</li>
</ul>
</details>

### Windows tablet

<details>
<summary> Windows tablet </summary>
<img src="">
<h3> Notes</h3>
<ul>
  <li>This works fine</li>
</ul>
</details>

## Accessibilty

I tried to keep focus on colours. I used different blues and made use of a lot of white colours. I personally think that it works well.
Some colour examples:
<details>
<summary>Colour analyser</summary>
  <img src="docAssets/color-analyst.png">
  <img src="docAssets/color-analyst-2.png">
  <img src="docAssets/colorblindness.png">
</details>

## What i have learned
* ES6 support that didn't work for me.
* I noticed that the fallback could be tricky sometimes.
* The existence of `attachEvent`
* proper use of fallbacks
