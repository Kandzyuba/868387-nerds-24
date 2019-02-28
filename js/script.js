  var link = document.querySelector(".map-button");
  
  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".modal-close");
  
  var form = popup.querySelector(".feedback-form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var content = popup.querySelector("[name=content]");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
    if (storage) {
      email.value = storage;
      content.focus();
    } else {
      email.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !content.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
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
  