const navBtn_respui = document.querySelector('.navbar-Btn');
const main_Navbar = document.querySelector('.navBar-header');
const navbar_bnt = document.querySelector('.navBar_respoUi_btn');

navbar_bnt.addEventListener("click", () => {
    navBtn_respui.style.display = 'none';
    main_Navbar.style.display = 'flex'
})


