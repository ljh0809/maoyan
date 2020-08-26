import React, {useState} from 'react';
import {LoginWrapper} from './styled'
import LogoTitle from "../../components/logoTitle";
import Tab from "../../components/tab";
import {UserModel} from '../../servers/user'
const userModel = new UserModel()
function Login(props) {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [msg,setMsg] = useState('')
    const loginHandler = ()=>{
        if(username!==''&& password!==''){
            userModel.getLogin(username,password)
                .then(res=>{
                    console.log(res)
                    setMsg(res.msg)
                    if(res.ret === 0){
                        localStorage.setItem('token',JSON.stringify(res.wdata.oauth_token));
                        console.log(props)
                        props.history.push('/home')
                    }
                })
        }
        setUsername('')
        setPassword('')
    }
    return (
        <LoginWrapper>
            <LogoTitle/>
            {
                msg &&  <div className='trip'>{msg}</div>
            }
            <Tab tabs={[{id:1,title:'账号登录'},{id:2,title:'账号注册'}]}>
                <div>
                    <input type="text" placeholder='账号名/手机号/Email' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input type="password" placeholder='请输入您的密码' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={loginHandler}>登录</button>
                </div>
                <div>
                    <input type="text" placeholder='账号名/手机号/Email'/>
                    <input type="password" placeholder='请输入您的密码'/>
                    <button>注册</button>
                </div>
            </Tab>
        </LoginWrapper>
    );
}

export default Login ;