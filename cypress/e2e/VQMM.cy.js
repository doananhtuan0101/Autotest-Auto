import 'cypress-file-upload';
// const CHECKBOXES_SEL = '[type="checkbox"]';
// const RADIO_ADDRESS ='[type="radio"]';
// const INPUT_ADDRESS ='[type="text"]';
// const DROPDOWM_SEL ='ul [class="MuiAutocomplete-listbox"]';
const BUTTON_SIDE3 ='div [type ="button"]'
const BUTTON_DATE ='input [type="tel"]'

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
        cy.get('p').contains('Quản lý trò chơi').click().wait(2000)
        cy.wait(2000)
        cy.get('p').contains('Danh sách trò chơi').click()
      
      });
        cy.url().should('contain','/dashboard/game/list')

        //Click Thêm mới trò chơi
        cy.get('a').contains('Tạo mới trò chơi').click()
        cy.url().should('contain','/dashboard/game/create')

        //Cấu hình trò chơi
        cy.get('input[name="name"]').type('VQMM-AUTO')
        cy.get('input[role="combobox"]').click().wait(2000)
        .then(()=>{
          cy.get('li').contains('WHEEL').click().wait(1000)
          cy.get('input[name="policyLink"]').type('VQMM-AUTO')
        cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
        cy.get('input[type="file"]').attachFile('VQMM.png');
        });

        cy.get(BUTTON_DATE).eq(0).click().wait(2000)
        })

        

  
  });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});