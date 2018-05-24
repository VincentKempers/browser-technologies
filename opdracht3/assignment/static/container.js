if (!document.attachEvent) {
  var clickAble = document.getElementsByTagName("dd");
  for (var i = 0; i < clickAble.length; i++) {
    clickAble[i].addEventListener('click', function showContent(event) {
      

    },true)
  }
}
