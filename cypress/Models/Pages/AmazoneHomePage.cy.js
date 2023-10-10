const SEARCH_TXT_BOX_SEL ="#twotabsearchtextbox";
const SEARCH_BTN_SEL ="#nav-search-submit-button";

class AmazoneHomePage {

    get searchTxtBxElem(){
        return cy.get(SEARCH_TXT_BOX_SEL)
    }

    get searchBtnElem(){
        return cy.get(SEARCH_BTN_SEL)
    }
}
module.exports = AmazoneHomePage