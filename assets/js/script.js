  // const container = document.querySelector(".container");
  // const pwShowHide = document.querySelectorAll(".showHidePw");
  // const pwFields = document.querySelectorAll(".password");
  // const signUp = document.querySelector(".signup-link");
  // const login = document.querySelector(".login-link");
  const loginBtn = document.querySelector("#button");
  const menuLogin = document.querySelector(".menu-login");
  const detailt = document.querySelector("#detail");
  const history = document.querySelector("#history");
  const closeIcon = document.querySelector("#closeIcon");
  const mainForm = document.querySelector("#froms");
  const filTer = document.querySelector("#filter");
  const menuList = document.querySelector("#menu-list");
  const manaGe = document.querySelector("#manage");
  const manageSales = document.querySelector("#manage-sales");
  const closeArrow = document.querySelector("#close-arrow");
  const closeArrows = document.querySelector("#js-arrow_icon");
  const manageBar = document.querySelector("#footer-manage-bar-icon");
  const modalMenu = document.querySelector(".modal-menu");
  const buyBtns = document.querySelectorAll(".js-buy-ticket");
  const modal = document.querySelector(".js-modal");
  const modalClose = document.querySelector(".js-modal-close");
  const tableBtns = document.querySelectorAll(".home_area-table");
  const managePay = document.querySelector("#js-manage-pay");
  const menuBag = document.querySelector("#js-menu-bag");
  const closeArrowss = document.querySelector("#js-close-arrow-2");
  const closeIcons = document.querySelector('#js-close-icon');

  const footerOder = document.querySelector('#js-footer-manage-oder');

//   js code to show/hide password and change icon
// pwShowHide.forEach((eyeIcon) => {
//   eyeIcon.addEventListener("click", () => {
//     pwFields.forEach((pwField) => {
//       if (pwField.type === "password") {
//         pwField.type = "text";

//         pwShowHide.forEach((icon) => {
//           icon.classList.replace("uil-eye-slash", "uil-eye");
//         });
//       } else {
//         pwField.type = "password";

//         pwShowHide.forEach((icon) => {
//           icon.classList.replace("uil-eye", "uil-eye-slash");
//         });
//       }
//     });
//   });
// });

function hideBuyTickets() {
  modalMenu.classList.remove("open");
}
modalMenu.addEventListener("click", hideBuyTickets);
modalMenu.addEventListener("click", function (event) {
  event.stopPropagation();
});

// note
function showBuyTickets() {
  /* h??m hi???n th??? modal form th??m class open*/
  modal.classList.add("open");
}

function hidenBuyTickets() {
  /* h??m ???n modal form g??? b??? class open c???a modal */
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", hidenBuyTickets);
// end note

//danh m???c
document.getElementById("mobile-menu").onclick = function () {
  document.getElementById("nav").style.display = "block";
};
//end

//th??m m??n trong QL th???c ????n

function onclickduavaogiohang() {
  confirm("???? th??m v??o gi??? h??ng! ");
}
//b??? m??n trong QL th???c ????n

function onclickDelete() {
  confirm('b???n c?? ch???c ch???n mu???n x??a!');
}



function showMenu() {
  menuLogin.classList.add("open");
}
loginBtn.addEventListener("click", showMenu);

/*begin xem chi ti???t*/

function showHistory() {
  history.style.display = "block";
}
function closeHistory() {
  history.style.display = "none";
}
/*end xem chi ti???t*/

// begin login
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});
// end login

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
  manaGe.style.display = 'block';
  manageSales.style.display = 'none';

}

/*nh???n b??n hi??n th??? form oder c???a admin*/
function myTable() {
  managePay.style.display = "block";
  manaGe.style.display = "none";
}
//close chi ti???t
function myClosess() {
  managePay.style.display = "none";
  manaGe.style.display = "block";
}

// function myManagePay() {
//   managePay.style.display = "block";
//   menuBag.style.display = "none";
// }

function myDetail() {
  manageSales.style.display = 'block';
  managePay.style.display = 'none';
}


// begin login








  //check icon password
  // const pwShowHide = document.querySelectorAll(".showHidePw");
  // const pwFields = document.querySelectorAll(".password");
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