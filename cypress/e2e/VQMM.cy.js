import 'cypress-file-upload';
// const CHECKBOXES_SEL = '[type="checkbox"]';
// const RADIO_ADDRESS ='[type="radio"]';
// const INPUT_ADDRESS ='[type="text"]';
// const DROPDOWM_SEL ='ul [class="MuiAutocomplete-listbox"]';
const BUTTON_SIDE3 ='div [type ="button"]'
const BUTTON_DATE ='button [tabindex="0"]'

import 'cypress-file-upload';

describe('VQMM', () => {
  beforeEach(() => {
    cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/auth/login');

    // Thực hiện đăng nhập và lưu thông tin đăng nhập
    cy.get('input[name="email"]').type('dev@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('form').submit().wait(2000);

    // Chờ cho đến khi đăng nhập thành công
    cy.url().should('eq', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
  });

  it('Tạo mới 1 trò chơi', () => {
    //Click vào quản lý trò chơi
    cy.get(BUTTON_SIDE3).eq(0).click()
      .then(() => {
        // danh sách game
        cy.get('p').contains('Quản lý trò chơi').click()
        // cy.wait(2000)
        cy.get('p').contains('Danh sách trò chơi').click()
      
      });
        cy.url().should('contain','/dashboard/game/list')

        //Click Thêm mới trò chơi
        cy.get('a').contains('Tạo mới trò chơi').click()
        cy.url().should('contain','/dashboard/game/create')

        //Cấu hình trò chơi
        cy.get('input[name="name"]').type('VQMM-AUTO')
        cy.get('input[role="combobox"]').click()
        .then(()=>{
          cy.get('li').contains('WHEEL').click()
          cy.get('input[name="policyLink"]').type('VQMM-AUTO')
        cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
        cy.get('input[type="file"]').attachFile('VQMM.png');
        });

        cy.get('button[aria-label="Choose date"]').eq(0).click()
        .then(()=>{
        //  cy.get('.button[type="button"]').contains('10').click()
        cy.contains('button', '10').click();
        cy.contains('span', 'PM').click();
        cy.get('div[role="listbox"]')
        .find('span') // Tìm các thẻ li 
        .then(() => {
          // cy.get('span').contains('10').click({force: true}).wait(100000);
          cy.get('div.MuiClock-clock').invoke('attr', 'style', 'pointer-events: auto');
          cy.get('.MuiClockNumber-root[aria-label="10 hours"]').click(); // Click vào thời gian 10 giờ
          // cy.get('button[aria-label="open next view"]').click()
        });
        
       
        
        })
        })

        

  
  });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});