import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar o produto da lista', () => {
       produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Josie Yoga Jacket')
        cy.get('.product_title').should('contain', 'Josie Yoga Jacket')
    });

    it('Deve visitar a página do produto ', () => {
        produtosPage.visitarProduto('ingrid running jacket')
    });
    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Josie Yoga Jacket')
        produtosPage.adicionarCarrinho('S', 'Blue', 6)

        cy.get('.woocommerce-message').should('contain', 'seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
           
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.adicionarCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade )
    
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
});