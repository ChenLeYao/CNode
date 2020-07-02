import React , { Component } from "react";
import { Avatar ,Row , Col  , Card , List , Skeleton , SkeletonParagraphProps} from 'antd';
import '../../index.css';
import axios from 'axios';
import api from '../../api.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class User  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId :  props.match.params.id ,
            data : {} ,
            loading : true
        }
    }
    componentDidMount() {
        this.getData();
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.getData();
    }
    getData(){
        axios.get(`${api.user}${this.state.userId }`).then( data =>{
                this.setState({
                    data : data.data.data ,
                    loading : false
                });
                console.log(data.data.data);
           }
        ).catch(e=>{
            console.log(e);
        })
    }
    render() {
        return(
            <div className='wrap wrap_border no_padding'>
                <Skeleton loading={this.state.loading} active  avatar={true} >
                </Skeleton>
                <Skeleton loading={this.state.loading} active  paragraph >
                <Row >
                <Col md={24} xs={0}>
                    <div className="user">
                    <div >
                        <Avatar className="user_avatar" src={this.state.data.avatar_url}/>
                    </div>
                    <div className="user_message">
                        <div><span className="title">用户名:</span>{ this.state.data.loginname}</div>
                        <div><span className="title">积分:</span>{ this.state.data.score}</div>
                        <div ><span className="title">注册时间:</span>{ this.state.data.create_at}</div>
                    </div>
                    </div>
                </Col>
                <Col md={0} xs={24}>
                    <Row className="user_vertical">
                        <Card bordered={false} className="user_avatar_vertical">
                            <Card.Meta
                              avatar={<Avatar src={this.state.data.avatar_url}/>}
                              title={ this.state.data.loginname }
                              description={ `注册时间 : ${this.state.data.create_at}` }
                            />
                        </Card>
                    </Row>
                </Col>
              </Row>
               <UserCreateList recent_topics={ this.state.data.recent_topics}/>
               </Skeleton>
        </div>
        )
    }
}

class UserCreateList extends Component {
    render(){
        return(<div className="user_create_list">
            <Card bordered={false}  headStyle={{background:"#fafafa"}} bodyStyle={{ padding:'10px'}} title={`最近创建的话题`}>
                  <List itemLayout="vertical" dataSource={this.props.recent_topics} renderItem={item=>
                     <List.Item  extra={ `最后回复 : ${item.last_reply_at.split('T')[0]}` }>
                         <List.Item.Meta
                         title={<div style={{ fontWeight:'600'}}>
                             <Avatar src={item.author.avatar_url}/>
                             <span className="title">{ item.author.loginname}</span>
                             <span >创建了</span>
                             <span className="title"><Link to={`/details/${item.id}`}>{ item.title }</Link></span>
                         </div>}
                         />
                     </List.Item>
                  }/>
            </Card>
        </div>)
    }
}
export default connect( state => state.user )(User) ;
