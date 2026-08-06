const navBtn_respui = document.querySelector('.navbar-Btn');
const main_Navbar = document.querySelector('.navBar-header');
const navbar_bnt = document.querySelector('.navBar_respoUi_btn');

navbar_bnt.addEventListener("click", () => {
    navBtn_respui.style.display = 'none';
    main_Navbar.style.display = 'flex'
})

navbar_bnt.addEventListener("click", () => {
  main_Navbar.classList.remove("disable");
  [dashboard, transaction, analytics, budget].forEach(page => {
    page.classList.add("disable");
  });
})

const respouiLogic = window.matchMedia('(min-width: 450px)');

function showPage(activePage) {

  [dashboard, transaction, analytics, budget].forEach(page => {
    page.classList.add("disable");
  });
  

  activePage.classList.remove("disable");

  main_Navbar.classList.add('disable')

  if (respouiLogic.matches) {
    main_Navbar.style.display = 'none';
    navBtn_respui.style.display = 'flex';
  } else {
    main_Navbar.style.display = ''; 
    navBtn_respui.style.display = '';
  }
}


if (!respouiLogic.matches) {
  transaction_b.addEventListener("click", () => showPage(transaction));
  dashboard_b.addEventListener("click", () => showPage(dashboard));
  analytics_b.addEventListener("click", () => showPage(analytics));
  budget_b.addEventListener("click", () => showPage(budget));
}



respouiLogic.addEventListener('change', () => {
    printing(expense_data);
});