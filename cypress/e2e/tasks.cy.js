/// <reference types="cypress" />
describe('tarefas', ()=> {

    it('deve cadastradar uma nova tarefa', ()=> {
        cy.visit('http://localhost:3000')
        cy.get('input[placeholder="Add a new Task"]').type('Ler um novo livro')
        
        // //button[contains(text(), "Create")]
        cy.contains('button', 'Create').click()
    })
})