/// <reference types="cypress" />
import e2eModulo12Page from "../support/page_objects/e2eModulo12.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        e2eModulo12Page.selecaoProdutos()
        e2eModulo12Page.loginPosEscolha()
         e2eModulo12Page.dadosFaturamento(
        'João', 
        'Victor', 
        'Jhonny Testes', 
        'Brasil', 
        'Av Imperador', 
        '5500', 
        'São Paulo', 
        'São Paulo',
        '08800800', 
        '11 990909090', 
        'meu@email.com'
        )
        e2eModulo12Page.formaPagamento()


       


        
    });


})