describe ('Play game' , () => {

    beforeEach(() => {
        cy.visit('/login');
    
        // Thực hiện đăng nhập và lưu thông tin đăng nhập
        cy.get('input[name="phoneNumber"]').type('0393420676');
        cy.get('input[name="password"]').type('tuan123456');
        cy.get('form').submit().wait(2000);
    
        // Chờ cho đến khi đăng nhập thành công
        cy.url().should('contains', '/abcd1234');
      });


    it('Play game success', () => {
        cy.contains('div','Vòng quay may mắn').click()
        cy.contains('div','VQMM-AUTO-1').click().wait(2000)
        cy.get('button[type="button"]').eq(8).click().wait(10000)
        cy.get('button[type="button"]').eq(8).click({force: true}).wait(10000)
        
       
        
       
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
        return false;
      });
});