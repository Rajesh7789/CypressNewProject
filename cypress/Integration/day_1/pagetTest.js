import login_po from "../../support/PageObject/OrangeHRM/loginpage";
import logout_po from "../../support/PageObject/OrangeHRM/logoutpage";
import Link_po from "../../support/PageObject/OrangeHRM/link_po";


describe('', () => {
    
    const  Login_po = new login_po;
    const Logout_po = new logout_po;
    const link_po = new Link_po;


    it('test 1', () => {

        Login_po.enterUrl();
        Login_po.clicklogin();

        link_po.linkclick('Admin');

        Logout_po.clicklogout();

        
    });




});