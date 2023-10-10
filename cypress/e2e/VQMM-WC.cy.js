describe ('Play game' , () => {

    beforeEach(() => {
        cy.visit('/login');
    
        // Thực hiện đăng nhập và lưu thông tin đăng nhập
        cy.get('input[name="phoneNumber"]').type('0393420676');
        cy.get('input[name="password"]').type('tuan123456');
        cy.get('button[type="submit"]').contains('Đăng nhập').click().wait(2000);
    
        // Chờ cho đến khi đăng nhập thành công
        cy.url().should('contains', '/abcd1234');
      });


    it('Play game success', () => {
        cy.contains('div','Vòng quay may mắn').click()
        cy.contains('div','VQMM-WORKSHOP-PHYSICAL').click().wait(2000)
        // cy.get('button[type="button"]').eq(8).click().wait(13000).then(()=> {
        //   cy.get('.MuiBackdrop-root.MuiModal-backdrop.css-71frgt').click({ force:true });
        // })
       
        // cy.get('button[type="button"]').eq(8).click().wait(13000)
        
       // Lặp 8 lần
for (let i = 0; i < 8; i++) {
  cy.get('button[type="button"]').eq(8).click().wait(13000).then(() => {
    cy.get('.MuiBackdrop-root.MuiModal-backdrop.css-71frgt').click({ force:true });
  });
}
        
       
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
        return false;
      });
});