const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link"),
  loginBtn = document.querySelector("#button"),
  menuLogin = document.querySelector(".menu-login"),
  detailt = document.querySelector("#detail"),
  history = document.querySelector("#history"),
  closeIcon = document.querySelector("#closeIcon"),
  mainForm = document.querySelector("#froms"),
  filTer = document.querySelector("#filter"),
  menuList = document.querySelector("#menu-list"),
  manaGe = document.querySelector("#manage"),
  manageSales = document.querySelector("#manage-sales"),
  closeArrow = document.querySelector("#close-arrow"),
  closeArrows = document.querySelector("#js-arrow_icon"),
  manageBar = document.querySelector("#footer-manage-bar-icon"),
  modalMenu = document.querySelector(".modal-menu"),
  buyBtns = document.querySelectorAll(".js-buy-ticket"),
  modal = document.querySelector(".js-modal"),
  modalClose = document.querySelector(".js-modal-close"),
  tableBtns = document.querySelectorAll(".home_area-table"),
  managePay = document.querySelector("#js-manage-pay"),
  menuBag = document.querySelector("#js-menu-bag"),
  closeArrowss = document.querySelector("#js-close-arrow-2"),
  footerOder = document.querySelector('#js-footer-manage-oder');

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

function hideBuyTickets() {
  modalMenu.classList.remove("open");
}
modalMenu.addEventListener("click", hideBuyTickets);
modalMenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

// note
function showBuyTickets() {
  /* hàm hiển thị modal form thêm class open*/
  modal.classList.add("open");
}

function hidenBuyTickets() {
  /* hàm ẩn modal form gỡ bỏ class open của modal */
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", hidenBuyTickets);
// end note

//danh mục
document.getElementById("mobile-menu").onclick = function () {
  document.getElementById("nav").style.display = "block";
};
//end

function onclickduavaogiohang() {
  alert("đã thêm vào giỏ hàng");
}
function showMenu() {
  menuLogin.classList.add("open");
}
loginBtn.addEventListener("click", showMenu);

/*begin xem chi tiết*/

function showHistory() {
  history.style.display = "block";
}
function closeHistory() {
  history.style.display = "none";
}
/*end xem chi tiết*/

// begin login
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});
// end login

/*begin login*/

  function xignUp() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      password: password,
    };
    var json = JSON.stringify(user);

    localStorage.setItem(username, json);
    alert("đã thành công");
    menuLogin.style.display = "block";
    mainForm.style.display = "none";
  }
/*end login*/

/*begin menu -list*/
function myFunction() {
  menuList.style.display = "block";
  manaGe.style.display = "none";
}
/*end menu -list*/
function myFunction1() {
  manageSales.style.display = "block";
  manaGe.style.display = "none";
}

function myFunction2() {
  manageSales.style.display = "block";
  menuList.style.display = "none";
}

function myFunction3() {
  manaGe.style.display = "block";
  menuList.style.display = "none";
}
function myFunction4() {
  menuList.style.display = "block";
  manageSales.style.display = "none";
}

/*nhấn bàn hiên thị form oder của admin*/
function myTable() {
  managePay.style.display = "block";
  manaGe.style.display = "none";
}
//close chi tiết
function myClosess() {
  managePay.style.display = "none";
  manaGe.style.display = "block";
}

// function myManagePay() {
//   managePay.style.display = "block";
//   menuBag.style.display = "none";
// }





