describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });



    it('Deve selecionar o produto da lista', () => {
        cy.get('.block-inner')
        //.first()
        //.last()
        .eq(2)
        .click()
        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });
});