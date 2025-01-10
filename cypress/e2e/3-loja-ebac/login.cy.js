
describe('Funcionalidade: Login', () => {

   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

   afterEach(() => {
    cy.screenshot()
   });

    it('Deve fazer Login com sucesso', () => {
        cy.get('#username').type('teste@tes.br')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste-1788')

    })

    it('Deve exibir uma mensagem de erro ao inserir um usário inválido', () => {
        cy.get('#username').type('teste@teste.br')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('teste@tes.br')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });
})