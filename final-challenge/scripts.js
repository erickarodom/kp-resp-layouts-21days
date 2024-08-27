// data 

const hamburgerMenu = document.getElementById('hamburgerMenu');
const dropDownMenu  = document.getElementById('dropDownMenu');
const closeDropMenuBtn = document.getElementById('closeDropDown');


// functions

function openMobileMenu() {
    dropDownMenu.classList.add('drop-down-on');
    dropDownMenu.classList.remove('drop-down-off');
}

function closeMobileMenu(){
    dropDownMenu.classList.remove('drop-down-on');
    dropDownMenu.classList.add('drop-down-off');
}






// execution

hamburgerMenu.addEventListener('click', openMobileMenu
);

closeDropMenuBtn.addEventListener('click', closeMobileMenu);
