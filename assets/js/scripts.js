



const managePay = document.querySelector("#js-manage-pay");
const manaGe = document.querySelector("#manage");

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


// chuyển qua thực đơn
const menuList = document.querySelector("#menu-list");

function myFunction() {
    menuList.style.display = "block";
    manaGe.style.display = "none";
  }

//close quản lý thực thực đơn
function myFunction3() {
    manaGe.style.display = "block";
    menuList.style.display = "none";
  }

//chuyển từ quản lý thực đơn qua doanh số
const manageSales = document.querySelector("#manage-sales");

// function myFunction2() {
//     manageSales.style.display = "block";
//     menuList.style.display = "none";
//   }

  function myFunction1() {
    manageSales.style.display = "block";
    manaGe.style.display = "none";
  }
//close doanh thu


  function myFunction4() {
    manaGe.style.display = 'block';
    manageSales.style.display = 'none';
  
  }



/*begin xem chi tiết*/
const history = document.querySelector("#history");

function showHistory() {
    history.style.display = "block";
  }
  function closeHistory() {
    history.style.display = "none";
  }
  /*end xem chi tiết*/


  //thêm món trong QL thực đơn

function onclickduavaogiohang() {
    confirm("đã thêm vào giỏ hàng! ");
  }
  //bỏ món trong QL thực đơn
  
  function onclickDelete() {
    confirm('bạn có chắc chắn muốn xóa!');
  }
  

//danh mục
// document.getElementById("mobile-menu").onclick = function () {
//     document.getElementById("nav").style.display = "block";
//   };

var nav = document.getElementById('nav');
var mobileMenu = document.getElementById('mobile-menu');
// var navHeight = nav.clientHeight;

  mobileMenu.onclick = function() {
    var isClose = nav.clientHeight === 46;
    if (isClose) {
      nav.style.height = 'auto';
    }else {
      nav.style.height = null;
      
    }
  }
//
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  
  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (!isParentMenu){
      nav.style.height = null;
    } else {
      event.preventDefault();
    }
  }
}


  //
  const buyBtns = document.querySelectorAll(".js-buy-ticket");
  const modal = document.querySelector(".js-modal");
  const modalClose = document.querySelector(".js-modal-close");

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




  //ẩn hiện user
  const userIcon = document.querySelector('#js-user-icon');
  const menuLogout = document.querySelector('#js-menu-logout');

  function clickUser() {
    menuLogout.style.display = 'block';
  }
//end

  //chuyển về login 
  const form =document.querySelector('#froms');

  function closeUser() {
    form.style.display = 'block';
    manaGe.style.display = 'none';
  }




