
import Registrationpage from "../../Pages/Registrationpage";
import { faker } from "@faker-js/faker";
const registrationobject=new Registrationpage()

// const first_name=faker.internet.userName()
// const last_name=faker.internet.userName()
// const email =faker.internet.email()
// const password=faker.internet.password()
// const confirmation_password=faker.internet.password()
// cy.readFile("cypress/fixtures/user.json").then((fileContents) => { 
//   cy.log(fileContents)
//   const jsonString = JSON.stringify(fileContents);
//   const jsonData = JSON.parse(jsonString);
//   jsonData.firstname =first_name;
//   jsonData.lastname = last_name;
//   jsonData.email = email;
//   jsonData.password = password;
//   jsonData.confirmationpassword = confirmation_password;
//   cy.writeFile('cypress/fixtures/user.json', JSON.stringify(jsonData)).then(() => {

//   })
// })
export const Generate_app_id=(min, max)=> {
    const random= Math.floor(Math.random() * (max - min) ) + min;
    return random
  }

  export const Registration =()=>{

    const first_name=faker.person.firstName()
    const last_name=faker.person.lastName()
    const email =faker.internet.email()
    const password=faker.internet.password()

    cy.readFile("cypress/fixtures/user.json").then((fileContents) => { 
      cy.log(fileContents)
      const jsonString = JSON.stringify(fileContents);
      const jsonData = JSON.parse(jsonString);
      jsonData.firstname =first_name;
      jsonData.lastname = last_name;
      jsonData.email = email;
      jsonData.password = password;
      jsonData.confirmationpassword = password;
      cy.writeFile('cypress/fixtures/user.json', JSON.stringify(jsonData)).then(() => {

  })

// const confirmation_password=faker.internet.password()
    cy.contains("Create an Account").click({force:true})
    registrationobject.getfirstname().type(`${first_name}{enter}`);
    registrationobject.getlastname().type(`${last_name}{enter}`)
    registrationobject.getemail().type(`${email}{enter}`)
    registrationobject.getpassword().first().type(`${password}{enter}`)
    registrationobject.getpasswordconfirmation().last().type(`${password}{enter}`)
registrationobject.getsubmit().click()
})







  }