
/**
 *  # NAVEGAÇÃO POR TAB
 */

function initTab() {
const tabMenu = document.querySelectorAll(".js-tab-menu li");
const tabContent = document.querySelectorAll(".js-tab-content section");

tabContent[0].classList.add('ativo');

if(tabMenu.length && tabContent.length){
  function activeTab(index){

    tabContent.forEach((content) =>{
      content.classList.remove('ativo');
    })

    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener("click", () => {
      activeTab(index)
    });
  });
}
}
initTab();


/**
 * # ACCORDION LIST
 */

function initAccordion() {
const accordionList = document.querySelectorAll('.js-accordion-list dt');
const ativoClass = 'ativo'

accordionList[0].classList.add(ativoClass)
accordionList[0].nextElementSibling.classList.add(ativoClass)

function activeAcordion(){
  this.classList.toggle(ativoClass)
  this.nextElementSibling.classList.toggle(ativoClass)
}

accordionList.forEach((item) =>{
  item.addEventListener("click", activeAcordion)
})
}

initAccordion()