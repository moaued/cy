const first_name='[name="firstname"]'
const last_name='[name="lastname"]'
const email ='[name="email"]'
const password ='[name="password"]'
const password_confirmation ='[name="password_confirmation"]'
const submit ='[class="action submit primary"]'



class Registrationpage{
 getfirstname() {return cy.get(first_name)}
 getlastname() {return cy.get(last_name)}
 getemail() {return cy.get(email)}
 getpassword() {return cy.get(password)}
 getpasswordconfirmation(){return cy.get(password_confirmation)}
 getsubmit(){return cy.get(submit)}




}
export default Registrationpage;