

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
Given('test',()=>{
  
cy.log("djdjj") 
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
        var pass= 12323
        jsonData.psaa = pass;
        jsonData.username2 = "ayed";
        cy.writeFile('cypress/fixtures/user.json', JSON.stringify(jsonData)).then(() => {
      
        })
        })
 })