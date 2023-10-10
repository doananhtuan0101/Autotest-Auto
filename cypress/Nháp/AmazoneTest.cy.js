// const AmazoneHomePage = require("../Models/Pages/AmazoneHomePage.cy");
import AmazonSearchResultPage from "../Models/Pages/AmazonSearchResuitlPage.cy";
import AmazoneHomePage from "../Models/Pages/AmazoneHomePage.cy";
describe('Amz search', function(){

    it('Should be able to search dining table', () => {
        const SEARCH_TEXT = " Dinning table";
        
        cy.visit("https://www.amazon.com/");
        let amzHomePage = new AmazoneHomePage();
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchBtnElem.click()

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchIteamElemlist.should("not.have.length",0);
    })
})
