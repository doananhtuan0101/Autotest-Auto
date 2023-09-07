
import 'cypress-file-upload';

const myFile = '1.jpg';
describe('Đăng nhập', () => {
  beforeEach(() => {
    cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/login');

    // Thực hiện đăng nhập và lưu thông tin đăng nhập
    cy.get('input[name="phoneNumber"]').type('0393420676');
    cy.get('input[name="password"]').type('tuan123456');
    cy.get('form').submit().wait(2000);

    // Chờ cho đến khi đăng nhập thành công
    cy.url().should('eq', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234').wait(2000);
  });

  it('Thay đổi avatar', () => {
    //click vào tên user
    cy.get('button').eq(5).click().wait(2000)
    cy.get('li').contains('Thông tin tài khoản').click()
    cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/profile').wait(2000)
    cy.get('img').eq(7).click()
      // cy.get('.css-ijj0tr').click().wait(2000)
      .then(() => {
        cy.get('input[type="file"]').attachFile(myFile).wait(2000);
      });
    cy.get('button').contains('Lưu').click()


    // cy.fixture('1.jpg', 'base64').then((fileContent) => {
    //   cy.get('input[type="file"]').attachFile(
    //     {
    //       fileContent,
    //       fileName: '1.jpg',
    //       mimeType: 'image/jpg'
    //     },
    //     { subjectType: 'input' }
    //   );
    // });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });
});