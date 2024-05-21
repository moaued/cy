

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Registration } from '../../support/utlis/common'
Given('test',()=>{
  
cy.log("cypress") 
 })
 And('read from json file',()=>{
    cy.readFile("cypress/fixtures/user.json").then((data) => { 
        cy.log(data.username)
    })
 })
 And('write in json file',()=>{
    cy.writeFile('cypress/fixtures/user.json',{
         username:"mostafaa",

        })
    
 })
 And('update content in json file',()=>{
    cy.readFile("cypress/fixtures/user.json").then((fileContents) => { 
        cy.log(fileContents)
        const jsonString = JSON.stringify(fileContents);
        const jsonData = JSON.parse(jsonString);
        var pass= 123234
        jsonData.psaa = pass;
        jsonData.username2 = "ayedsaAD";
        cy.writeFile('cypress/fixtures/user.json', JSON.stringify(jsonData)).then(() => {
      
        })
       

        })
 })
 And('Registration',()=>{

   Registration()


 })