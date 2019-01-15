
var link = document.querySelector(".batton-email");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".write-us-close");
var form = popup.querySelector("form");
var myname = popup.querySelector("[name=myname]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("myname");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
      myname.value = storage;
      email.focus();
  } else {
   myname.focus();
}
});
close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!myname.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("myname", myname.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});

/*-----------------------*/

var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.remove("modal-show");
});
/**/
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
}
});
