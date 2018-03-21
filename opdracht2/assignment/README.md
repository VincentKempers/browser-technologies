# Accordion
This is a accordion module for showing more content after a click. The accordion is a nice addition for a FAQ or showing more information about a term.
To challenge myself I kept IE9 in my mind while developing! I knew grid wouldn't work and as it was stated in the assignment it would be a module.
On positioning i didn't use much just `display: flex;` which isn't supported on IE9.

The accordion


-	Bronnen van uitleg en gebruikte artikelen.
## Sources
* [quirksmode table of contents about all selectors](https://quirksmode.org/dom/core/#fivemethods)
* [Impressive web CSS3 support in IE9](https://www.impressivewebs.com/css3-support-ie9/)
* [can i use](https://caniuse.com/)

-	Welke browsers/devices ondersteunen deze wel/niet.

## Browser support

### Javascript
![Support for getElementsByClassName](docImages/getElementsByClassName.png)
_The support for getElementsByClassName_

![Support for getElementById](docImages/getElementById.png)
_The support for getElementById_

![Support for nextsibling](docImages/NextSibling.png)
_The support for NextSibling_

![support classList](docImages/classlist.png)
_The support for NextSibling_

![querySelectorAll support for ie8 is incomplete](docImages/querySelectorAll.png)
_querySelectorAll support for ie8 is incomplete but technically it works for what i need it to do._

```JS
  if("getElementsByClassName" in document) {
    // do something with getElementsByClassName.
  } else {
    // do something with the right fallback in this case querySelectorAll.
  }
```


### CSS
![vw vmin vh vmax support](docImages/vwvhvminvmax.png)
_vw vmin vh vmax support_

Transistions don't work on IE9.

![Transistions](docImages/transitions.png)
_support CSS3 transitions_


![Transitions are very buggy on Opera mobile](docImages/Opera-mobile.png)
_transitions are very buggy on opera mobile_

On opera mini it won't work because of the way opera works. It saves data to send "images" of de browser and it will know the coordinates of what you have clicked and show that page. Animation or transitions won't work (well) for that matter.


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
if("getElementsByClassName" in document) {
  // Run the code with get getElementsByClassName
  console.dir(document);
} else {
  // run the code with a different selector
  console.log("Not supported");
}
```

# link + overlay
I made a terms of service on this page so you can accept and decline and fill a checkbox. A background color is added to identify the user that this is the main "thing". You can exit anytime and it's made completely with CSS so there isn't that much Javascript going on. On the part of positioning i used `display: flex;`.


## Sources
* [quirksmode table of contents about all selectors](https://quirksmode.org/dom/core/#fivemethods)
* [Impressive web CSS3 support in IE9](https://www.impressivewebs.com/css3-support-ie9/)
* [can i use](https://caniuse.com/)

-	Welke browsers/devices ondersteunen deze wel/niet.

## Browser support
Because of the low Javascript usage are there only some CSS fallbacks needed to be created.
* Em's work til IE 9 without being buggy.
* Usage of `display: flex;`.
* `:target` psuedo element should be supported on every browser except Opera mini and IE 7.


### Javascript
![Support for getElementById](docImages/getElementById.png)
_The support for getElementById_

![Support for style](docImages/classlist.png)
_The support for NextSibling_

### CSS
![Support for flexbox](docImages/displayflex.png)
_The support for flexbox_
