const INPUT_ADDRESS = '[type="text"]';
describe('Logout', () => {
    beforeEach(() => {
      // Login before each test
      cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
      cy.get('input[name="email"]').type('dev@gmail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('form').submit();
      cy.url().should('include', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
    });
  
  
    it('Click successfully', () => {
  
      cy.get('.MuiButtonBase-root').eq(2).click({ force: true });
  
      cy.wait(2000);
      
      cy.get('.MuiButtonBase-root').eq(0).click({ force: true });
  
      cy.get(".simplebar-content-wrapper").scrollTo(0, 1120, {ensureScrollable: false}).then(()=>{
       cy.wait(2000);
  
        cy.get('p').contains('Sản phẩm V2').click().wait(2000);
  
      cy.get('p').contains('Danh sách sản phẩm').click().wait(2000).then(() => {
        cy.wait(2000);
        cy.get('a').contains('Thêm sản phẩm mới').click();
        cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
          cy.get('input[type="file"]').attachFile('1.jpg');
        });
        cy.get('input[name="common.name"]').type('1');
        cy.get('input[name="common.shortDescription"]').type('1');
        cy.get('div[data-placeholder="Viết về sản phẩm của bạn..."]').type('1');
        cy.get(INPUT_ADDRESS).eq(4).click().wait(2000);
        cy.get('.MuiAutocomplete-listbox')
      .find('li') 
      .then(() => {
        cy.get('p').contains('Thực phẩm chức năng').click().wait(2000);
      });
        
      });
     
      });
     
    
      
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  });