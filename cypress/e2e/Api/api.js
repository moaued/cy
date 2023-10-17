
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Generate_app_id,} from '../../support/utlis/common.cy'


Given('get request',()=>{
     cy.request({
      method:'GET',
     
     url: "https://gorest.co.in/public/v2/users/",
}).as('details')
cy.get('@details').its('status').should('eq', 200)
cy.get('@details').then((response) => {
    cy.log(JSON.stringify(response.body))
    cy.log(JSON.stringify(response.body.id))
    cy.readFile("cypress/fixtures/users.json").then((profile) => {
     profile= response.body
     cy.writeFile('cypress/fixtures/users.json', profile)
 })
})     
})
Given('post request',()=>{
     var random=Generate_app_id(100000000,999999999)
cy.log(random)
     cy.request({
          method: 'POST',
   url: "https://gorest.co.in/public/v2/posts/",
     failOnStatusCode: false,
           'auth': {
               'bearer': "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e"
           },
     
          //Expecting the response status code to be 200
        
          body: {'user':att2,
          'user_id': random,
          'email':faker.internet.email(),
          'title':'This is a title',
          'body': 'This is a message'} }).as('details')
          //Validate status code
          cy.get('@details').its('status').should('eq', 201)
          cy.get('@details').then((response) => {
              let res = response.body
              let post_id = res.id
              cy.log(post_id)
          })
          cy.get('@details').then((response) => {
              cy.log(JSON.stringify(response.body))
          })
          
})
