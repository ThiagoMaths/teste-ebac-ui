
describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)

        })

    });

    it('Deve completar detalhe da conta com sucesso', () => {
        cy.detalhesContas('Thiago', 'qa', 'thiagoqa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});