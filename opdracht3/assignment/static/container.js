if (document.addEventListener) {
  var clickAble = document.getElementsByTagName("dd");
  var imageShow = document.getElementById('content');

  for (var i = 0; i < clickAble.length; i++) {
    clickAble[i].addEventListener('click', showPicture, true);
  }

  function showPicture(event) {
    var phoneNumbers = Math.floor(Math.random() * 999 + 100) + '-' + Math.floor(Math.random() * 999 + 100) + '-' + Math.floor(Math.random() * 999 + 100);
    imageShow.innerHTML = "<img src='static/imgs/random-user_imageM4.jpg' alt=''> <p>"+ phoneNumbers +"</p> <p>407 Cummings Point Apt. 883</p> <p><a href='mailto:Emory_Schmitt22@hotmail.com'>Emory_Schmitt22@hotmail.com</a></p> <p>UserName"+ Math.floor(Math.random() * 2000 + 1) + " </p>";
    imageShow.classList.remove('hidden');
    imageShow.classList.add('animationleftToRight');
  }

  function hidePicture(event) {
    imageShow.classList.add('hidden');
  }
}
  
