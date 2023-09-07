const { describe } = require("mocha");

describe ('abcd' ,function () {
    it('should be able to interact with list of element', function(){
        cy.visit("/login")

        //Use eq cách 1
        cy.get("input").eq(0).type("0393420676")
        cy.get("input").eq(1).type("tuan123456")
        cy.get("button[type=submit]").click()

        //use closure cách 2
        cy.get("input").then(items => {
            cy.get(items[0]).clear() // dòng này để xóa dữ liệu ở ô input username trên khi sử dụng eq
            cy.get(items[0]).type("0393420676")
            cy.get(items[1]).clear() // dòng này để xóa dữ liệu ở ô input password trên khi sử dụng eq
            cy.get(items[1]).type("tuan123456")
            cy.get("button[type=submit]").click()

        
            
        })

    })
});

// Buổi 6
const CHECKBOXES_SEL = '[type="checkbox"]';
describe ('HandLing checkbox' , () => {
    it('should be able to select/unselect a checkbox', () => {
        cy.visit("/login")
        //Try to unselect the second checkbox, ( get ra 1 list)
        cy.get(CHECKBOXES_SEL).eq(1).click();
        //Verify all checkboxes are unselected
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length",2);
        //Loop over all checkboxes again then select all
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(item => {
            cy.get(item).click({multiple:true})
        });
    
    })
});