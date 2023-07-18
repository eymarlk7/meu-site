/** FUNÇÃO DROPDOWN DO MENU LATERAL COMPLENTO */

function controleMenu(){
    const menu = document.querySelector(".menu-sidebar")

    if(menu.style.display=="block"){
        menu.style.display="none" 
    }else{
        menu.style.display="block"
    }

}

/** FUNÇÃO DROPDOWN DO ITEMS DO MENU LATERAL */

function controleMenu2(){
    const menuDropdown = document.querySelector("ul.items-menuLeft")

   if(menuDropdown.style.display=="block"){
        menuDropdown.style.display="none"
    }else{
        menuDropdown.style.display="block"
    }
}


/**FUNÇÃO PARA EMITIR UMA TELA DE ALERTA EM LINKS NÃO CONFIGURADOS */

function alerta(){
    const smsAlerta = alert('Caro estudante o sisa encontra-se em manunteção, e só algumas funcionalidades estão dispóniveis');
    
}