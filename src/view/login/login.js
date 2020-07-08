import React ,  { Component } from 'react'
import { Button , Input ,Alert } from "antd";
import {  UserOutlined  ,LockOutlined} from '@ant-design/icons';
class Login extends Component {
   render(){
       return(
           <div className="wrap mate_content">
               <div className="login_panel">
                <h2 className="login_title">
                    登录CNode
                </h2>
               <p>
                   <Input placeholder="手机号/邮箱" prefix={<UserOutlined />} />
               </p>
               <p>
                   <Input.Password placeholder="请输入密码"  prefix={<LockOutlined />} />
               </p>
               <p>
                   <Button block type="primary">登录</Button>
               </p>
                   <div className="login_tip" style={{ display : 'flex' , justifyContent : 'space-between'}}>
                       <span>忘记密码？<a style={{ color : 'red' }}>找回密码</a></span>
                       <span>立即注册</span>
                   </div>
                   <Alert message="登录功能暂未开放" type="info" showIcon />
               </div>

           </div>
       )
   }
}

export default Login;

