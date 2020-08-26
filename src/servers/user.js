import {HttpGet} from "../util/http";

export class UserModel extends HttpGet{
    getLogin(username,password){
        return this.request({
            url:' http://s.linweiqin.com/api/s/loginCheck',
            params:{
                username,
                password
            }
        })
    }
}