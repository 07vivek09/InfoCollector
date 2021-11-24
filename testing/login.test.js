import {Login} from '/src/view/Auth/SignUp/LoginComponent';
describe("Login",()=>{
    test('should give error when email is not correct',()=>{
        let result=Login("testemail");
        expect(result).toBe()
    })
})