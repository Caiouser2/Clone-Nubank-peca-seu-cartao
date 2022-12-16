const containerStartPage = document.getElementsByClassName("container-start-page");

function getHeightContainerStartPage() {
    let heightContainerStartPage = containerStartPage[0].offsetHeight;
    return heightContainerStartPage;
}
window.addEventListener("resize", getHeightContainerStartPage);

const containerMenuNav = document.getElementsByTagName("header");
const showAndHideMenu = document.getElementsByClassName("container-menu-nav");
const buttonWannaBeNubankMobileDevices = document.getElementsByClassName("alternative-button-wanna-be-nubank");

window.addEventListener("scroll", () => {
    if (window.pageYOffset - 80 > getHeightContainerStartPage()) {
        containerMenuNav[0].classList.remove('adjust9');
        showAndHideMenu[0].classList.remove('adjust10');
        buttonWannaBeNubankMobileDevices[0].classList.remove('adjust11');

    } else {
        containerMenuNav[0].classList.add('adjust9');
        showAndHideMenu[0].classList.add('adjust10');
        buttonWannaBeNubankMobileDevices[0].classList.add('adjust11');
    }
});
// ********************** Section Show and Hide Menu ***************************

// ********************** Section validation numbers mini form *****************
const inputTel = document.querySelector("input[type='tel']");

inputTel.addEventListener('keyup', (e) => {
    const regExpAllowOnlyNumbers = /[^0-9. -]/g; //any characters different of 0 to 9 or different of . and - return true

    if (regExpAllowOnlyNumbers.test(inputTel.value)) {
        inputTel.value = '';
    } else {
        if (  inputTel.value.length === 3  && e.key !== 'Backspace' ) {
            inputTel.value = inputTel.value.substr(0, 4) + ".";
        }
    
        if (  inputTel.value.length === 7 && e.key !== 'Backspace' ) {
            inputTel.value = inputTel.value.substr(0, 8) + ".";
        }
    
        if (  inputTel.value.length === 11 && e.key !== 'Backspace' ) {
            inputTel.value = inputTel.value.substr(0, 12) + "-";
        }
    }
});

// ********************** pop up warning non-comercial content *****************
const popUpContainer = document.querySelector(".warning-content");
const buttonHidePopUp = document.querySelector("#button-hide-pop-up");
const backgroundOfPopUp = document.querySelector(".background-opacity");

buttonHidePopUp.addEventListener("click", () => {
    popUpContainer.classList.add('none'); 
    buttonHidePopUp.classList.add('none');
    backgroundOfPopUp.classList.add('none');
});