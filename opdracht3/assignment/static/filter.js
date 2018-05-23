// This shouldn't work but it does on IE8 !? SUP WITH THAT JAVASCRIPT
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
} else {
  var theInput = document.querySelector('#myInput');
  theInput.addEventListener('keyup', function myFunction() {
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
  }, false );
}
