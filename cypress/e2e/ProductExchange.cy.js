// describe('Đăng nhập', () => {
//   it('Thực hiện đăng nhập thành công', () => {
//     // Mở trang web
//     cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/login');

//     // Nhập thông tin đăng nhập
//     cy.get('input[name="phoneNumber"]').type('0393420677');
//     cy.get('input[name="password"]').type('tuan123456');

//     // Gửi biểu mẫu đăng nhập
//     cy.get('form').submit();

//     // Kiểm tra xem đăng nhập thành công
//     cy.url().should('eq', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234');

//   });

//   it('Thực hiện click vào icon sản phẩm', () => {

// cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234')

// // Lưu thông tin đăng nhập vào localStorage
// localStorage.setItem('isLoggedIn', 'true');
// localStorage.setItem('phoneNumber', '0393420676');


// // Kiểm tra trạng thái đăng nhập
// if (localStorage.getItem('isLoggedIn') === 'true') {
//  // Người dùng đã đăng nhập
//  const phoneNumber = localStorage.getItem('phoneNumber');
//  console.log('Người dùng', phoneNumber, 'đã đăng nhập.');
// } else {
//  // Người dùng chưa đăng nhập
//  console.log('Người dùng chưa đăng nhập.');
// }
// // Kiểm tra thông tin đăng nhập từ localStorage
// cy.getLocalStorage('isLoggedIn').should('equal', 'true');


// // Click vào icon tìm kiếm sản phẩm
// cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-10ygcul').click({multiple: true});
// cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/category');
// cy.get('h4').should('contain', 'Bộ lọc tìm kiếm');
// });

// });

const CHECKBOXES_SEL = '[type="checkbox"]';
const RADIO_ADDRESS = '[type="radio"]';
const INPUT_ADDRESS = '[type="text"]';
// const DROPDOWM_SEL = 'ul [class="MuiAutocomplete-listbox"]';
// const LI_1 = 'li [class= "MuiAutocomplete-option"]'
import 'cypress-file-upload';
describe('Đăng nhập', () => {
  beforeEach(() => {
    cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/login');

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
    // cy.get('p').contains('Sản phẩm').click({ multiple: true }).wait(2000);
    cy.get('button[type="button"]').contains('Sản phẩm').click().wait(2000)
    cy.url().should('include', '/abcd1234/category');
    cy.get('h4').should('contain', 'Bộ lọc tìm kiếm');

    //Click button Xem thêm
    cy.get('button').contains('Xem thêm').click().wait(2000)
    cy.get('button').contains('Xem thêm').click().wait(2000)

    // Chọn danh mục để tìm sản phẩm
    cy.get(CHECKBOXES_SEL).eq(14).click().wait(2000);
    // ...
    cy.contains('sprite').click().wait(2000) // Click on first el containing 'Welcome'
    // cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-4.MuiGrid-grid-md-4.css-187ph2h').click({force: true});

    cy.url().should('include', '/abcd1234/productDetail/44').wait(2000);
    cy.get('h3').should('contain', 'sprite');
    //Tăng số lượng sản phẩm
    cy.get('.MuiButtonBase-root').eq(10).click().wait(2000)
    //Click thêm vào giỏ hàng
    cy.contains('Thêm vào giỏ hàng').click().wait(2000)

    //Chuyển đến màn giỏ quà
    cy.get('p').contains('Giỏ hàng').click().wait(2000)
    cy.url().should('include', '/abcd1234/checkout');
    // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng thành công
    cy.contains('sprite').should('have.length', 1);

    //Click button thanh toán
    cy.get('button').contains('Thanh toán').click().wait(2000);

    //Click thêm địa chỉ giao hàng
    cy.get('button').contains('Thêm mới địa chỉ').click().wait(2000)
    cy.get('input[name="name"]').type('Đoàn Anh Tuấn 1');
    cy.get('input[name="phone"]').type('0393420676');

    // Nhấp vào ô input
    // cy.get(INPUT_ADDRESS).eq(4).click() ;
    cy.get('div[name="province"]').click().wait(2000);
    // .then(() => {
    // cy.get('li').eq(1).click({force: true});

    // });
    // cy.get(LI_1).eq(1).click()
    // cy.get('.MuiDialog-root.MuiModal-root.css-126xj0f').scrollIntoView();
    // Chọn một phần tử từ dropdown list
    // cy.get('[role="list-box]"').select(1).wait(6000);
    cy.get('ul[role="list-box"]')
      .find('li')
      .then(() => {
        // Kiểm tra nội dung của p trong li
        cy.get('p').contains('Tỉnh Hà Giang').click().wait(2000);
      });
    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    cy.get('input[role="combobox"]').eq(1).should('have.value', 'Tỉnh Hà Giang');


    //Chọn quận huyện
    cy.get(INPUT_ADDRESS).eq(5).click().wait(2000);
    //get ra class của thẻ ul
    // cy.get('.MuiAutocomplete-listbox')
    cy.get('ul[role="list-box"]')
      .find('li') // Tìm các thẻ li 
      .then(() => {
        cy.get('p').contains('Thành phố Hà Giang').click().wait(3000);
      });
      // cy.get('input[role="combobox"]').should('have.value', 'Thành phố Hà Giang');

    // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
    // cy.get('.MuiInputBase-input.MuiAutocomplete-input').eq(1).should('have.value', 'Thành phố Hà Giang').wait(2000);


    //Chọn xã phường
    cy.get(INPUT_ADDRESS).eq(6).click().wait(2000);
    //get ra class của thẻ ul
    cy.get('ul[role="list-box"]')
      .find('li') // Tìm các thẻ li 
      .then(() => {
        cy.get('p').contains('Phường Quang Trung').click().wait(2000);
      });
      // cy.get('input[role="combobox"]').eq(1).should('have.value', 'Phường Quang Trung');

    //Nhập số nhà
    cy.get('input[name="address1"]').type('Số 79 ngõ 35')
    cy.get('button').contains('Cập nhật ').click().wait(2000)

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