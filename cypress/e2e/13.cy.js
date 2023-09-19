import 'cypress-file-upload';
import 'cypress-file-upload';
const BUTTON_SIDE3 = 'div [type ="button"]';
const INPUT_RADIO = 'input[type="radio"]';
const INPUT_CHECKBOX = 'input[type="checkbox"]';
const INPUT_COMBOBOX = 'input[role="combobox"]';
const BUTTON_SUBMIT = 'button[type="submit"]';
const START_DAY ='input[type="01/09/2023 12:00:00"]';
const END_DAY ='input[type="30/09/2023 12:00:00"]';
const SHOULD_LINK_ID_GAME ="https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/21/game-gift/list";
const NAME_GAME_PHYSICAL ="VQMM-AUTO-PHYSICAL";
const NAME_GAME_VOUCHER ="VQMM-AUTO-VOUCHER";

describe('Create Game', () => {
  beforeEach(() => {
    cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/auth/login');

    // Thực hiện đăng nhập và lưu thông tin đăng nhập
    cy.get('input[name="email"]').type('dev@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('form').submit().wait(2000);

    // Chờ cho đến khi đăng nhập thành công
    cy.url().should('eq', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
  });

//   it('Tạo mới 1 trò chơi', () => {
//     //Click vào quản lý trò chơi
//     cy.get(BUTTON_SIDE3).eq(0).click()
//       .then(() => {
//         // danh sách game
//         cy.get('p').contains('Quản lý trò chơi').click()

//         cy.get('p').contains('Danh sách trò chơi').click()

//       });
//         cy.url().should('contain','/dashboard/game/list')

//         //Click Thêm mới trò chơi
//         cy.get('a').contains('Tạo mới trò chơi').click()
//         cy.url().should('contain','/dashboard/game/create')

//         //Cấu hình trò chơi
//         cy.get('input[name="name"]').type(NAME_GAME_PHYSICAL)
//         cy.get('input[role="combobox"]').click()
//         .then(()=>{
//           cy.get('li').contains('WHEEL').click()
//           cy.get('input[name="policyLink"]').type('VQMM-AUTO-1.com')
//         cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
//         cy.get('input[type="file"]').attachFile('VQMM.png');
//         });

//         // chọn ngày bắt đầu
//         cy.get('input[type="tel"]').eq(0).type(START_DAY)
//          //Chọn ngày kết thúc
//         cy.get('input[type="tel"]').eq(1).type(END_DAY)
       
//         //Click bật active
//         cy.get('input[name="status"]').click()
//         cy.get('button[type="submit"]').contains('Tạo Mới').click().wait(2000)

//         });

//   });//it


  //CASE 2 - CREATE GIFT PHYSICAL  
  it('Setup gift physical', () => {
    cy.get(BUTTON_SIDE3).eq(0).click()
      .then(() => {
        // danh sách game
        cy.get('p').contains('Quản lý trò chơi').click()
        cy.get('p').contains('Danh sách trò chơi').click()
      });
    cy.url().should('contain', '/dashboard/game/list')

    //click chọn game vừa tạo
    // cy.get('tbody.MuiTableBody-root.css-1xnox0e').within(() => {
    //   cy.contains('td', NAME_GAME_PHYSICAL).click()
    // })
    cy.wait(3000);

    cy.get('tbody>tr').wait(2000).eq(0).click();

  })


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});//1