if (!document.attachEvent) {
  var clickAble = document.getElementsByTagName("dd");
  var imageShow = document.getElementById('content');



  for (var i = 0; i < clickAble.length; i++) {
    clickAble[i].addEventListener('click', showPicture, true);
  }

  function showPicture(event) {
    var phoneNumbers = Math.floor(Math.random() * 999 + 1) + '-' + Math.floor(Math.random() * 999 + 1) + '-' + Math.floor(Math.random() * 999 + 1);
    imageShow.innerHTML = `
      <img src="static/imgs/random-user_imageM4.jpg" alt="">
      <p>Home: ${phoneNumbers}</p>
      <p>address: 407 Cummings Point Apt. 883</p>
      <p><a href="mailto:Emory_Schmitt22@hotmail.com">Emory_Schmitt22@hotmail.com</a></p>
      <p>username${Math.floor(Math.random() * 2000 + 1)}</p>
    `
    imageShow.classList.remove('hidden');
  }

  function hidePicture(event) {
    imageShow.classList.add('hidden');
  }
}
