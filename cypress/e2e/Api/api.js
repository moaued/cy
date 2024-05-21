
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Generate_app_id,} from '../../support/utlis/common'
import { faker } from '@faker-js/faker';
import { describe } from 'mocha';


let att1
let att2
let random=Generate_app_id(100000000,999999999)
Given('get request',()=>{

     cy.request({
      method:'GET',
     
     url: "https://gorest.co.in/public/v2/users/",
}).as('details')
cy.get('@details').its('status').should('eq', 200)
cy.get('@details').then((response) => {
    // cy.log(JSON.stringify(response.body))
    cy.log(JSON.stringify(response.body[0].id))
    
   
    const responseData = {};

    // Store the response data as key-value pairs
    response.body.forEach((user, index) => {
      responseData[`user_${index + 1}`] = user;
    });
  
     cy.writeFile('cypress/fixtures/users.json',  responseData)

     cy.readFile('cypress/fixtures/users.json').then((users) => {
  // The contents of the file are now available in the 'users' variable
  const firstUser = users['user_1'];
       // Log the first user's name
    //   // Log the first user's name and email
  cy.log(`First user name: ${firstUser.name}`);
  cy.log(`First user email: ${firstUser.email}`);
      
    
    
      });
      

 })
})     

Given('users post request',()=>{
     
cy.log(random)
     cy.request({
          method: 'POST',
   url: "https://gorest.co.in/public/v2/users/",
     failOnStatusCode: false,
           'auth': {
               'bearer': "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e"
           },
     
          //Expecting the response status code to be 200
        
        body: {'name':faker.internet.userName(),
          'gender':'male',
          'email':faker.internet.email(),
          'status':'active'} }).as('details')
          //Validate status code
          cy.get('@details').its('status').should('eq', 201)
          cy.get('@details').then((response) => {
              let res = response.body
             att1= res.id
             att2= res.user
          
          })
          cy.get('@details').then((response) => {
              cy.log(JSON.stringify(response.body))
          })
          
})
Then('posts post request',()=>{



    cy.request({
        method: 'POST',
        url: "https://gorest.co.in/public/v2/posts/",
        failOnStatusCode: false,
        'auth': {
            'bearer': "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e"
        },
        body: {'user':att2,
        'user_id': att1,
        'email':faker.internet.email(),
        'title':random,
        'body': random}
    }).as('details')
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
Then('API - PUT Request',()=>{

    cy.request({
        method: 'PUT',
        url:"https://gorest.co.in/public/v2/users/"+att1,
        failOnStatusCode: false,
        'auth': {
            'bearer': "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e"
        },
        body: {'name':faker.internet.userName(),
        'gender':'female',
        'email':faker.internet.email(),
        'status':'active'}
    }).as('details')
    //Validate status code
    cy.get('@details').its('status').should('eq', 200)
    cy.get('@details').then((response) => {
        cy.log(JSON.stringify(response.body))
    })




}) 
Then('API - DELETE Request', () => {
    cy.request({
        method: 'DELETE',
        url:"https://gorest.co.in/public/v2/users/"+att1,
        failOnStatusCode: false,
        'auth': {
            'bearer': "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e"
        },
    }).as('details')
    //Validate response code
    cy.get('@details').its('status').should('eq', 204)
    cy.get('@details').then((response) => {
        cy.log(JSON.stringify(response.body))
    })
   
       
})