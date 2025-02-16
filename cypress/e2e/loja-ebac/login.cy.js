
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste-1788')
    });

    it('Deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste-1788')
        })

    });
    
    it.only('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login('teste@tes.br', '1234' )
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste-1788')

    
});

});