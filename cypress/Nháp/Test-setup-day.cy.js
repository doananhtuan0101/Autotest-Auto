const BUTTON_SIDE3 = 'div [type ="button"]';
const INPUT_RADIO = 'input[type="radio"]';
const INPUT_CHECKBOX = 'input[type="checkbox"]';
const INPUT_COMBOBOX = 'input[role="combobox"]';
const BUTTON_SUBMIT = 'button[type="submit"]';
const NAME_GAME_PHYSICAL = "VQMM-WORKSHOP-PHYSICAL";
describe('Test Setup Ngày Bắt Đầu và Ngày Kết Thúc', () => {

    beforeEach(() => {
        cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/auth/login');

        // Thực hiện đăng nhập và lưu thông tin đăng nhập
        cy.get('input[name="email"]').type('dev@gmail.com');
        cy.get('input[name="password"]').type('123456');
        cy.get('form').submit().wait(2000);

        // Chờ cho đến khi đăng nhập thành công
        cy.url().should('eq', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
    });

    it('Thiết lập ngày bắt đầu và ngày kết thúc', () => {

        //Click vào quản lý trò chơi
        cy.get(BUTTON_SIDE3).eq(0).click()
            .then(() => {
                // danh sách game
                cy.get('p').contains('Quản lý trò chơi').click()

                cy.get('p').contains('Danh sách trò chơi').click()

            });
        cy.url().should('contain', '/dashboard/game/list')

        //Click Thêm mới trò chơi
        cy.get('a').contains('Tạo mới trò chơi').click()
        cy.url().should('contain', '/dashboard/game/create')

        //Cấu hình trò chơi
        cy.get('input[name="name"]').type(NAME_GAME_PHYSICAL)
        cy.get('input[role="combobox"]').click()
            .then(() => {
                cy.get('li').contains('WHEEL').click()
                cy.get('input[name="policyLink"]').type('VQMM-AUTO-1.com')
                cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
                    cy.get('input[type="file"]').attachFile('VQMM.png');
                });

                // Lấy ngày hiện tại
                const currentDate = new Date();

                // Sao chép ngày hiện tại để tạo ngày bắt đầu
                const startDate = new Date(currentDate);

                // Thêm 30 ngày vào ngày bắt đầu để tạo ngày kết thúc
                startDate.setDate(startDate.getDate() + 30);


                // Định dạng ngày bắt đầu và ngày kết thúc
                const startDateStr = startDate.toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                const endDateStr = currentDate.toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                // // Truy cập vào trang web hoặc ứng dụng của bạn
                // cy.visit('URL_CUA_BAN');

                // Tiến hành nhập giá trị ngày bắt đầu và ngày kết thúc
                cy.get('input[type="tel"]').eq(0).type(startDateStr);
                cy.get('input[type="tel"]').eq(1).type(endDateStr);



                //Click bật active
                cy.get('input[name="status"]').click()
                cy.get('button[type="submit"]').contains('Tạo Mới').click().wait(2000)

            });




    });
});