import React  , { Component }from 'react';
import {  Menu   } from 'antd';
import {  Link } from 'react-router-dom';
import '../../index.css';
import Icon , { HomeOutlined , ReadOutlined , BarsOutlined } from '@ant-design/icons';
console.log(window.location.pathname);
class Nav extends  Component {
    constructor( props ){
        super(props);
        this.state = {
            pathname  : window.location.pathname
        };
        // console.log(this.props);
        this.hashChange = this.hashChange.bind(this);
    }
    hashChange ( item ){
         this.setState({
                 pathname :item.key
          })
    }
    render (){
        // console.log('重新渲染');
        return(
            <Menu mode={ this.props.mode }  theme={this.props.theme} selectedKeys={[ this.state.pathname ]}>
                <Menu.Item key="/index/all" onClick={ this.hashChange }>
                    <Link to="/index/all"> <Icon  component={HomeOutlined}/>首页</Link>
                </Menu.Item>
                <Menu.Item  key="/book" onClick={ this.hashChange }>
                    <Link to="/book"><Icon component={ReadOutlined}/>教程</Link>
                </Menu.Item>
                <Menu.Item key="/about" onClick={ this.hashChange }>
                    <Link to="/about"><Icon component={BarsOutlined}/>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export  default  Nav ;
