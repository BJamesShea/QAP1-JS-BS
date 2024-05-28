document.getElementById("grillPic").addEventListener("mouseover", function () {
  document.getElementById("truckStart").play();
});

document.getElementById("grillPic").addEventListener("mouseout", function () {
  document.getElementById("truckStart").pause();
  document.getElementById("truckStart").currentTime = 0;
});
