import 'cypress-file-upload';
import 'cypress-file-upload';
const BUTTON_SIDE3 = 'div [type ="button"]';
const INPUT_RADIO = 'input[type="radio"]';
const INPUT_CHECKBOX = 'input[type="checkbox"]';
const INPUT_COMBOBOX = 'input[role="combobox"]';
const BUTTON_SUBMIT = 'button[type="submit"]';

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

  // it('Tạo mới 1 trò chơi', () => {
  //   //Click vào quản lý trò chơi
  //   cy.get(BUTTON_SIDE3).eq(0).click()
  //     .then(() => {
  //       // danh sách game
  //       cy.get('p').contains('Quản lý trò chơi').click()

  //       cy.get('p').contains('Danh sách trò chơi').click()

  //     });
  //       cy.url().should('contain','/dashboard/game/list')

  //       //Click Thêm mới trò chơi
  //       cy.get('a').contains('Tạo mới trò chơi').click()
  //       cy.url().should('contain','/dashboard/game/create')

  //       //Cấu hình trò chơi
  //       cy.get('input[name="name"]').type('VQMM-AUTO')
  //       cy.get('input[role="combobox"]').click()
  //       .then(()=>{
  //         cy.get('li').contains('WHEEL').click()
  //         cy.get('input[name="policyLink"]').type('VQMM-AUTO')
  //       cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
  //       cy.get('input[type="file"]').attachFile('VQMM.png');
  //       });


  //       // chọn ngày bắt đầu
  //       cy.get('button[aria-label="Choose date"]').eq(0).click()
  //       .then(()=>{
  //       //  cy.get('.button[type="button"]').contains('10').click()
  //       cy.contains('button', '10').click();
  //       cy.contains('span', 'PM').click();
  //       cy.get('div[role="listbox"]')
  //       .find('span') // Tìm các thẻ span
  //       .then(() => {
  //         // cy.get('span').contains('10').click({force: true}).wait(100000);
  //         // cy.get('div.MuiClock-clock').invoke('attr', 'style', 'pointer-events: auto');
  //         cy.get('span[aria-label="12 hours"]').click({force: true})

  //          // Click vào thời gian 10 giờ
  //         // cy.get('button[aria-label="open next view"]').click()
  //       });



  //       });

  //       //Chọn ngày kết thúc
  //       cy.get('button[aria-label="Choose date"]').eq(0).click()
  //       .then(()=>{
  //       //  cy.get('.button[type="button"]').contains('10').click()
  //       cy.contains('button', '30').click();
  //       cy.contains('span', 'PM').click();
  //       cy.get('div[role="listbox"]')
  //       .find('span') 
  //       .then(() => {
  //         cy.get('span[aria-label="12 hours"]').click({force: true})
  //       });

  //       //Click bật active
  //       cy.get('input[name="status"]').click()
  //       cy.get('button[type="submit"]').contains('Tạo Mới').click()

  //       })

  //       });

  // });//it


  //CASE 2 - CREATE GIFT  
  it('Setup gift', () => {
    cy.get(BUTTON_SIDE3).eq(0).click()
      .then(() => {
        // danh sách game
        cy.get('p').contains('Quản lý trò chơi').click()
        cy.get('p').contains('Danh sách trò chơi').click()
      });
    cy.url().should('contain', '/dashboard/game/list')

    //click chọn game vừa tạo
    cy.get('tbody.MuiTableBody-root.css-1xnox0e').within(() => {
      cy.contains('td', 'VQMM-AUTO').click()
    })

    //Click button tạo giải thưởng ( TẠO GIẢI LẦN 1)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').click()

    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click()

    //Tạo giải chỉ định user (giải số 1)
    cy.get('input[name="name"]').type('Cocacola')
    cy.get('input[name="posInImage"]').type('1')
    cy.get('input[name="quantity"]').type('10')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('1.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get(INPUT_CHECKBOX).eq(1).click()
      cy.get('div[role="button"]').click().then(() => {
        cy.get('li[role="option"]').contains('Giải chỉ định người dùng may mắn').click()

      })
      cy.get('input[name="ordinal"]').type('2')
      cy.get(INPUT_COMBOBOX).eq(2).type('+84393420676')
      cy.get('li[role="option"]').contains('+84393420676').click()
      cy.get(BUTTON_SUBMIT).click()
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')

    }),


    //Click button tạo giải thưởng( TẠO GIẢI LẦN 2)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').wait(2000).click()
    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click()
    //Tạo giải chỉ định user (giải số 2)
    cy.get('input[name="name"]').type('Pepsi')
    cy.get('input[name="posInImage"]').type('2')
    cy.get('input[name="quantity"]').type('10')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('2.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get(INPUT_CHECKBOX).eq(1).click()
      cy.get('div[role="button"]').click().then(() => {
        cy.get('li[role="option"]').contains('Giải chỉ định người dùng may mắn').click() 
      })

      cy.get('input[name="ordinal"]').type('1')
      cy.get(INPUT_COMBOBOX).eq(2).type('+84393420676').wait(2000)
      cy.get('li[role="option"]').contains('+84393420676').click()
      cy.get(BUTTON_SUBMIT).click().wait(2000)
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')

    });

    //Click button tạo giải thưởng( TẠO GIẢI LẦN 3)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').click()
    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click().wait(2000)
    //Tạo giải chỉ định tỉnh thành (giải số 3)
    cy.get('input[name="name"]').type('C2 Vàng')
    cy.get('input[name="posInImage"]').type('3')
    cy.get('input[name="quantity"]').type('20')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('3.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get(INPUT_CHECKBOX).eq(1).click()
      cy.get('div[role="button"]').click().wait(2000).then(() => {
        cy.get('li[role="option"]').contains('Giải chỉ định theo tỉnh thành').click()

      })

      cy.get('input[name="ordinal"]').type('2')
      cy.get(INPUT_COMBOBOX).eq(2).type('Thành phố Hà Nội').wait(2000)
      cy.get('li[role="option"]').contains('Thành phố Hà Nội').click()
      cy.get(BUTTON_SUBMIT).click().wait(2000)
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')
    });

    //Click button tạo giải thưởng( TẠO GIẢI LẦN 4)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').click()
    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click().wait(2000)
    //Tạo giải chỉ định tỉnh thành (giải số 4)
    cy.get('input[name="name"]').type('C2 Đỏ')
    cy.get('input[name="posInImage"]').type('4')
    cy.get('input[name="quantity"]').type('20')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('4.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get(INPUT_CHECKBOX).eq(1).click()
      cy.get('div[role="button"]').click().wait(2000).then(() => {
        cy.get('li[role="option"]').contains('Giải chỉ định theo tỉnh thành').click()

      })

      cy.get('input[name="ordinal"]').type('1')
      cy.get(INPUT_COMBOBOX).eq(2).type('Thành phố Hà Nội')
      cy.get('li[role="option"]').contains('Thành phố Hà Nội').click()
      cy.get(INPUT_COMBOBOX).eq(2).type('Tỉnh Hà Giang')
      cy.get('li[role="option"]').contains('Tỉnh Hà Giang').click()
      cy.get(BUTTON_SUBMIT).click().wait(2000)
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')

    });



    //Click button tạo giải thưởng( TẠO GIẢI LẦN 5)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').click()
    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click().wait(2000)
    //Tạo giải tỉnh thành ngẫu nhiên (giải số 5)
    cy.get('input[name="name"]').type('Trà dâu')
    cy.get('input[name="posInImage"]').type('5')
    cy.get('input[name="quantity"]').type('100')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('5.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get(INPUT_CHECKBOX).eq(1).click()
      cy.get('div[role="button"]').click().wait(2000).then(() => {
        cy.get('li[role="option"]').contains('Giải tỉnh thành ngẫu nhiên').click()

      })

      cy.get('input[name="winRate"]').type('50')
      cy.get('input[name="isWonMultiple"]').click()
      //click thêm tỉnh thành 1
      cy.get('button[type="button"]').eq(7).click()
      cy.get('input[type="text"]').eq(3).type('Thành phố Hà Nội').then(()=>{
        cy.get('li[role="option"]').contains('Thành phố Hà Nội').click()
      })
      cy.get('input[type="number"]').eq(3).type('20')

      //click thêm tỉnh thành 2
      cy.get('button[type="button"]').eq(10).click()
      cy.get('input[type="text"]').eq(4).type('Tỉnh Hà Giang').then(()=>{
        cy.get('li[role="option"]').contains('Tỉnh Hà Giang').click()
      })
      cy.get('input[type="number"]').eq(4).type('20')
      cy.get(BUTTON_SUBMIT).click().wait(2000)
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')

    });


    //Click button tạo giải thưởng( TẠO GIẢI LẦN 6)
    cy.get('button[type="button"]').contains('Tạo mới giải thưởng').click()
    //click Nhập giải thưởng
    cy.get(INPUT_RADIO).eq(1).click().wait(2000)
    //Tạo giải tỉnh thành ngẫu nhiên (giải số 6)
    cy.get('input[name="name"]').type('Chúc bạn may mắn lần sau')
    cy.get('input[name="posInImage"]').type('6')
    cy.get('input[name="quantity"]').type('100')
    cy.get('input[type="tel"]').eq(0).type('01/09/2023 12:00:00')
    cy.get('input[type="tel"]').eq(1).type('30/09/2023 12:00:00')
    cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
      cy.get('input[type="file"]').attachFile('5.jpg');
      cy.get(INPUT_CHECKBOX).eq(0).click()
      cy.get('div[role="button"]').click().wait(2000).then(() => {
        cy.get('li[role="option"]').contains('Giải tỉnh thành ngẫu nhiên').click()

      })

      cy.get('input[name="winRate"]').type('50')
      cy.get('input[name="isWonMultiple"]').click()
      //click thêm tỉnh thành 1
      // cy.get('button[type="button"]').eq(7).click()
      // cy.get('input[type="text"]').eq(3).type('Thành phố Hà Nội').then(()=>{
      //   cy.get('li[role="option"]').contains('Thành phố Hà Nội').click()
      // })
      // cy.get('input[type="number"]').eq(3).type('20')

      // //click thêm tỉnh thành 2
      // cy.get('button[type="button"]').eq(10).click()
      // cy.get('input[type="text"]').eq(4).type('Tỉnh Hà Giang').then(()=>{
      //   cy.get('li[role="option"]').contains('Tỉnh Hà Giang').click()
      // })
      // cy.get('input[type="number"]').eq(4).type('20')
      cy.get(BUTTON_SUBMIT).click().wait(2000)
      cy.url().should('contain', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/game/19/game-gift/list')

    });


  })//it2


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Trả về false để ngăn Cypress đánh dấu bài kiểm tra là thất bại
    return false;
  });

});//1