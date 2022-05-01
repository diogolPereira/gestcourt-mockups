
function registerChangeView(){
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const btnAction = document.getElementById("button_action");
    const password = document.getElementById("confirm-password");
    const email = document.getElementById("email");
    const hr = document.getElementById("login-separator");
    const infoRegist = document.getElementById("register-info");
    
    infoRegist.classList.add('d-none')    
    hr.classList.add('d-none')    
    password.classList.remove('d-none')    
    email.classList.remove('d-none')    
    title.textContent="Registar"
    btnAction.textContent="Registar"
    subtitle.textContent="Preencha os dados da conta"
}

$(document).ready(function () {
    var total = 0;
    var data = {};
    //get table and div container of table
    const register = document.getElementById("register_a");
        $(register).click(function (e) {
            e.stopPropagation()
            // event.stopPropagation()
            registerChangeView()
        })
    //create label for totals

});
