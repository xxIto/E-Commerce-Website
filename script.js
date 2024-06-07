// =============== Copy Menu for Mobile ===============
function copyMenu() {
    // Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    // Copy inside nav to nav
    var mainNav = document.querySelector(".header-nav nav");
    var navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    // Copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector(".header-top .wrapper");
    var topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// =============== Show Mobile Menu ===============
const menuButton = document.querySelector(".trigger"),
    closeButton = document.querySelector(".t-close"),
    addclass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
    addclass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
    addclass.classList.remove("showmenu");
});

// =============== Show Sub Menu on Mobile ===============
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) =>
        item != this ? item.closest(".has-child").classList.remove("expand") : null
    );
    if (this.closest(".has-child").classList != "expand");
    this.closest(".has-child").classList.toggle("expand");
}

// =============== Slider ===============
const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

// =============== Show Search ===============
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch')
})

/* ===============
 *
 *  KODE PENGGANTI
 *
 ============== */

// =============== Show Sub Menu on Mobile ===============
// const submenu = document.querySelectorAll('.has-child .icon-small');
// submenu.forEach((menu) => menu.addEventListener('click', toggle));

// function toggle(e) {
//     e.preventDefault();
//     submenu.forEach((item) => {
//         if (item !== this) {
//             item.closest('.has-child').classList.remove('expand');
//         }
//     });
//     this.closest('.has-child').classList.toggle('expand');
// }
