
const CHECKBOXES_SEL = '[type="checkbox"]';
const RADIO_ADDRESS = '[type="radio"]';
const INPUT_ADDRESS = '[type="text"]';

import 'cypress-file-upload';
describe('Đăng nhập', () => {
  beforeEach(() => {
    cy.visit('/login');

    // Thực hiện đăng nhập và lưu thông tin đăng nhập
    cy.get('input[name="phoneNumber"]').type('0393420676');
    cy.get('input[name="password"]').type('tuan123456');
    cy.get('form').submit().wait(2000);

    // Chờ cho đến khi đăng nhập thành công
    cy.url().should('contains', '/abcd1234').wait(2000);
  });


  it('Thực hiện mua sản phẩm thành công', () => {
    //Tìm kiếm sản phẩm ở ô input
    // cy.get('input[type="text"]').eq(0).type('cocacola').click().wait(2000)
    // .then(() => {
    //   cy.get('.MuiStack-root').eq(3).click().wait(10000);
    // });

    //Click vào icon sản phẩm
    cy.get('button[type="button"]').contains('Sản phẩm').click().wait(2000)
    cy.url().should('include', '/abcd1234/category');
    cy.get('h4').should('contain', 'Bộ lọc tìm kiếm');

    //Click button Xem thêm
    cy.get('button').contains('Xem thêm').click().wait(2000)
    cy.get('button').contains('Xem thêm').click().wait(2000)

    // Chọn danh mục để tìm sản phẩm
    cy.get('span').contains('Danh mục Tháng 9').click().wait(1000);
    // ...
    cy.contains('sprite').click().wait(2000)


    cy.url().should('include', '/productDetail/44').wait(2000);
    cy.get('h3').should('contain', 'sprite');

    //Tăng số lượng sản phẩm
    // cy.get('.MuiButtonBase-root').eq(10).click().wait(2000)
    cy.get('button[type="button"]').eq(10).click().wait(2000)

    //Click thêm vào giỏ hàng
    cy.get('button[type="submit"]').contains('Thêm vào giỏ hàng').click().wait(5000)

    //Chuyển đến màn giỏ quà
    cy.get('button[type="button"]').eq(6).click().wait(2000)
  
    cy.url().should('include', '/checkout');

    // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng thành công
    cy.contains('sprite').should('have.length', 1);

    //Click button thanh toán
    cy.get('button').contains('Thanh toán').click().wait(2000);

    //Click thêm địa chỉ giao hàng
    cy.get('button').contains('Thêm mới địa chỉ').click().wait(2000)
    cy.get('input[name="name"]').type('Đoàn Anh Tuấn 1');
    cy.get('input[name="phone"]').type('0393420676');

    // Nhấp vào ô input
    cy.get('div[name="province"]').click().wait(2000);
    cy.get('ul[role="list-box"]')
      .within(() => {
        // Kiểm tra nội dung của p trong li
        cy.get('p').contains('Tỉnh Hà Giang').click().wait(2000);
      });
    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    cy.get(INPUT_ADDRESS).eq(4).should('have.value', 'Tỉnh Hà Giang');

    //Chọn quận huyện
    cy.get(INPUT_ADDRESS).eq(5).click().wait(2000);
    //get ra class của thẻ ul
    cy.get('ul[role="list-box"]')
      
      .within(() => {
        cy.get('p').contains('Thành phố Hà Giang').click().wait(2000);
      });
    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    cy.get(INPUT_ADDRESS).eq(5).should('have.value', 'Thành phố Hà Giang');



    //Chọn xã phường
    cy.get(INPUT_ADDRESS).eq(6).click().wait(2000);
    //get ra class của thẻ ul
    cy.get('ul[role="list-box"]')
     
      .within(() => {
        cy.get('p').contains('Phường Quang Trung').click().wait(2000); // Xác định thẻ <p> bên trong modal
      });
    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    cy.get(INPUT_ADDRESS).eq(6).should('have.value', 'Phường Quang Trung');

    //Nhập số nhà
    cy.get('input[name="address1"]').type('Số 79 ngõ 35')
    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    cy.get(INPUT_ADDRESS).eq(7).should('have.value', 'Số 79 ngõ 35');

    //Click button Cập nhật
    cy.get('button').contains('Cập nhật ').click().wait(5000)


    //Chọn địa chỉ giao hàng
    cy.get(RADIO_ADDRESS).eq(0).click().wait(2000)

    //Click buton Tiếp tục
    cy.get('button').contains('Tiếp tục ').click().wait(2000)

    //Click button thanh toán
    cy.get('button').contains('Thanh toán ').click().wait(2000)
    cy.get('button').contains('Tình trạng đơn hàng').click().wait(2000)
    cy.get('p').contains('Mã đơn hàng #').click().wait(2000)
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});