class HomePage{
// Page Elements 
firstNameInputField(){
   return cy.get('[name = firstName]')
}



// Page Actions 
typeFirstName(firstNameTxt){
   return firstNameInputField.type(firstNameTxt)
}


// Page assertions
verifyFirstNameInputFieldValue(){
    return this.firstNameInputField().should()
}



}
export const homePage = new HomePage()