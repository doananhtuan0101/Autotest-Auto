// const CHECKBOXES_SEL = '[type="checkbox"]';
// const RADIO_ADDRESS ='[type="radio"]';
// const INPUT_ADDRESS ='[type="text"]';
// const DROPDOWM_SEL ='ul [class="MuiAutocomplete-listbox"]';
// describe('Đăng nhập', () => {
//   beforeEach(() => {
//     cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/login');

//     // Thực hiện đăng nhập và lưu thông tin đăng nhập
//     cy.get('input[name="phoneNumber"]').type('0393420676');
//     cy.get('input[name="password"]').type('tuan123456');
//     cy.get('form').submit().wait(2000);

//     // Chờ cho đến khi đăng nhập thành công
//     cy.url().should('eq', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234');
//   });

//   it('Thực hiện mua sản phẩm', () => {

//     //Click vào icon sản phẩm
//     cy.get('p').contains('Sản phẩm').click({ multiple: true }).wait(2000);
//     cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/category');
//     cy.get('h4').should('contain', 'Bộ lọc tìm kiếm');

//     //Click button Xem thêm
//     cy.get('button').contains('Xem thêm').click()
//     cy.get('button').contains('Xem thêm').click()

//     // Chọn danh mục để tìm sản phẩm
//     cy.get(CHECKBOXES_SEL).eq(9).click();
//     // ...
//     cy.contains('Trà Bí Đao').click() // Click on first el containing 'Welcome'
//     // cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-4.MuiGrid-grid-md-4.css-187ph2h').click({force: true});

//     cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/productDetail/50').wait(2000);
//     cy.get('h3').should('contain', 'Trà Bí Đao');
//     //Tăng số lượng sản phẩm
    
//     cy.contains('Thêm vào giỏ hàng').click()

//     //Chuyển đến màn giỏ quà
//     cy.get('p').contains('Giỏ hàng').click().wait(2000)
//     cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/checkout');
//     // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng thành công
//     cy.contains('Trà Bí Đao').should('have.length', 1);

//     //Click button thanh toán
//     cy.get('button').contains('Thanh toán').click()

    
//     //Chọn địa chỉ giao hàng
//     cy.get(RADIO_ADDRESS).eq(0).click()
    
//     //Click thêm địa chỉ giao hàng
//     cy.get('button').contains('Thêm mới địa chỉ').click()
//     cy.get('input[name="name"]').type('Đoàn Anh Tuấn');
//     cy.get('input[name="phone"]').type('0393420676');
    
//     // Nhấp vào ô input
//     cy.get(INPUT_ADDRESS).eq(4).click() ;

//     cy.get('div[name="province"]').click()
//     // cy.get('.MuiDialog-root.MuiModal-root.css-126xj0f').scrollIntoView();
//   // Chọn một phần tử từ dropdown list
//   // cy.get('[role="list-box]"').select(1).wait(6000);
  
// // tets1

// cy.get('ul') // Chọn phần tử ul
//   .invoke('attr', 'id') // Lấy giá trị thuộc tính ID
//   .then((idValue) => {
//     cy.log('Giá trị ID:', idValue) // In ra giá trị ID
//   })

// cy.get('ul') // Chọn phần tử ul
//   .invoke('attr', 'class') // Lấy giá trị thuộc tính lớp
//   .then((classValue) => {
//     cy.log('Danh sách lớp:', classValue) // In ra danh sách lớp
//   }),
//   //test 2


//   cy.get('#:rj:-listbox')
//   .find('li')
//   .each((li) => {
//     // Làm gì đó với từng phần tử li ở đây
//     // Ví dụ: Kiểm tra nội dung của li
//     cy.get('li').contains('Hà Giang').click();
//   });
  

//   // Kiểm tra xem ô input có được điền vào với giá trị đã chọn hay không
//   cy.get('.MuiStack-root.css-1gg5dsn').should('have.value', 'Tỉnh Hà Giang');


//   });


//   Cypress.on('uncaught:exception', (err, runnable) => {
//     // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
//     return false;
//   });

// });



const CHECKBOXES_SEL = '[type="checkbox"]';
const RADIO_ADDRESS ='[type="radio"]';
const INPUT_ADDRESS ='[type="text"]';
const DROPDOWM_SEL ='ul [class="MuiAutocomplete-listbox"]';
describe('Đăng nhập', () => {
  beforeEach(() => {
    cy.visit('https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/login');

    // Thực hiện đăng nhập và lưu thông tin đăng nhập
    cy.get('input[name="phoneNumber"]').type('0393420676');
    cy.get('input[name="password"]').type('tuan123456');
    cy.get('form').submit().wait(2000);

    // Chờ cho đến khi đăng nhập thành công
    cy.url().should('eq', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234');
  });

  it('Thực hiện mua sản phẩm', () => {

    //Click vào icon sản phẩm
    cy.get('p').contains('Sản phẩm').click({ multiple: true }).wait(2000);
    cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/category');
    cy.get('h4').should('contain', 'Bộ lọc tìm kiếm');

    //Click button Xem thêm
    cy.get('button').contains('Xem thêm').click()
    cy.get('button').contains('Xem thêm').click()

    // Chọn danh mục để tìm sản phẩm
    cy.get(CHECKBOXES_SEL).eq(9).click();
   
    // ...
    cy.contains('Trà Bí Đao').click() 
    cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/productDetail/50')
    // cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-4.MuiGrid-grid-md-4.css-187ph2h').click({force: true});

    cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/productDetail/50').wait(2000);
    cy.get('h3').should('contain', 'Trà Bí Đao');
    //Tăng số lượng sản phẩm
    
    cy.contains('Thêm vào giỏ hàng').click()

    //Chuyển đến màn giỏ quà
    cy.get('p').contains('Giỏ hàng').click().wait(2000)
    cy.url().should('include', 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234/checkout');
    // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng thành công
    cy.contains('Trà Bí Đao').should('have.length', 1);

    //Click button thanh toán
    cy.get('button').contains('Thanh toán').click()

    //Chọn địa chỉ giao hàng
    cy.get(RADIO_ADDRESS).eq(0).click()
    
    //Click buton Tiếp tục
    cy.get('button').contains('Tiếp tục ').click()

    //Click button thanh toán
    cy.get('button').contains('Thanh toán ').click()
    cy.get('button').contains('Tình trạng đơn hàng').click()
    cy.get('p').contains('Mã đơn hàng #').click()
  
  });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});