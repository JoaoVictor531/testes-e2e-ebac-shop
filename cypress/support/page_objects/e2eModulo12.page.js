class NomeClasse {

    selecaoProdutos(){
        cy.get('[class="image-hover unveil-image"]').eq(0).click()
            cy.get('.button-variable-item-XL').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type('4')
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
       }
    
       loginPosEscolha(){
        cy.get('.showlogin').click() //clique para logar após ter escolhido os produtos
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
       }
       
        dadosFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email){
            cy.get('#billing_first_name').clear().type(nome)
            cy.get('#billing_last_name').clear().type(sobrenome)
            cy.get('#billing_company').clear().type(empresa)
            cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
            cy.get('#billing_address_1').clear().type(endereco)
            cy.get('#billing_address_2').clear().type(numero)
            cy.get('#billing_city').clear().type(cidade)
            cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
            cy.get('#billing_postcode').clear().type(cep)
            cy.get('#billing_phone').clear().type(telefone)
            cy.get('#billing_email').clear().type(email)
        }
    
        formaPagamento(){
            cy.get('#payment_method_cod').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.page-title').should('be.visible')
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

}

export default new NomeClasse()