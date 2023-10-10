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

// Buổi 7
// phương thức within() trong Cypress được sử dụng để xác định một phạm vi tìm kiếm hạn chế cho các lệnh được gọi bên trong nó. Nó cho phép bạn tìm kiếm các phần tử con hoặc các phần tử liên quan chỉ trong một phần tử cha cụ thể.

// Cú pháp của within() là: cy.within(callback)

// Trong đó, callback là một hàm callback mà bạn cung cấp, và tất cả các lệnh bên trong within() sẽ được thực hiện trong ngữ cảnh của phần tử được chọn.

// Khi sử dụng within(), bạn thường bắt đầu bằng việc chọn một phần tử cha bằng cách sử dụng các phương thức như cy.get() hoặc cy.contains(). Sau đó, bạn gọi within() trên phần tử cha đã chọn và cung cấp một hàm callback để thực hiện các lệnh hoặc khẳng định bên trong phạm vi đó.

// Ví dụ:
// cy.get('.modal').within(() => {
//   cy.get('p').should('be.visible') // Tìm và xác thực tính hiển thị của các phần tử <p> bên trong phạm vi `.modal`
//   cy.get('button').click() // Thực hiện nhấp chuột vào các phần tử <button> bên trong phạm vi `.modal`
// })
// Trong ví dụ trên, cy.get('.modal') chọn phần tử .modal, sau đó within() xác định phạm vi tìm kiếm bên trong .modal. Các lệnh bên trong within() như cy.get('p').should('be.visible') và cy.get('button').click() sẽ chỉ tìm kiếm và tương tác với các phần tử <p> và <button> chỉ trong phạm vi .modal.

describe ('q' , () => {
    it('within method', () => {
        cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/category')
        // cy.get('.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.MuiGrid-spacing-sm-4')
        cy.get('p.MuiTypography-root.MuiTypography-body1.css-1olfkes').each(($cartTitle, index) => {
            cy.log(index)
        })
       
    })
});


// Buổi 8
