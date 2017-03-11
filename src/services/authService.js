import xhr from './lib/ajax.js';
/*
* 用户认证所用的API
* */
class AuthService{
    constructor(){

    }

    /**
     * 检测用户是否登陆
     */
    checkLogin(){
        // $.alert.show();
    }

    /*
    * 登陆
    * @param {string} userData.username
    * @return {object}
    * */
    login(userData){
        return {
            name:"登陆成功！"
        }
    }

    /*
    * 注销用户
    * */
    logout(){

    }
}

//实例化后导出，全局单例
export default new AuthService();
