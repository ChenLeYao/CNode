import React , { Component } from "react";
import { Card , Avatar  , List , Skeleton } from 'antd';
import {Link} from "react-router-dom";
import axios from 'axios';
import api from '../../api.js';
import '../../index.css';
import { connect } from  'react-redux';
import enlarge from '../enlarge.js';
import TextTag from "../textTag";
class Details  extends Component{
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }
    getData(){
        let id = this.props.match.params.id;
        axios.get( `${api.topic}${id}`).then(data=>{
              this.setState(data.data.data);
              this.setState({
                  loading : false
              })
        }).catch(e=>{
            console.log(e);
        })
    }
    componentDidMount() {
        this.getData();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        enlarge('mate_content');
    }
    render() {
        return(<div>
            <div className="wrap wrap-border mate_content">
            <h2> { this.state.title }</h2>
            <Card  bordered={false} bodyStyle={{   borderTop:'1px solid #cccccc' , padding: '24px 10px'}}>{
                this.state.author  && this.state.author.avatar_url ? <Card.Meta
                    avatar={<div><TextTag content={ this.state }/><Avatar src={ this.state.author.avatar_url} /></div>}
                    title={<div><Link to={ `/user/${ this.state.author.loginname}` }>{this.state.author.loginname}</Link><span>  发表于 {this.state.create_at.split('T')[0]} </span></div>}>
                </Card.Meta> : ''
                }
                <Skeleton loading={this.state.loading} active avatar>
                    <div className="meta_content" dangerouslySetInnerHTML={{
                        __html: this.state.content
                    }}>
                    </div>
               </Skeleton>
            </Card>
            </div>
            <div className="wrap_list">
                <Skeleton loading={this.state.loading} active  paragraph >
                <ResponseList replies={ this.state.replies} />
                </Skeleton>
            </div>
        </div>)
    }

}

class ResponseList extends Component{
    render() {
        return (
            <div style={ { border:'1px solid rgb(204, 204, 204)'}} className="response_list">
                <h4 style={ { background: '#f8f8f8' ,padding:'10px ' ,border:'1px solid rgb(204, 204, 204)', borderWidth:'1px 0 1px 0' , fontWeight:'600'}}>
                    评价
                </h4>
                <div>
                       <Card bordered={false}    bodyStyle={{ borderBottom:'1px solid #cccccc',padding:' 10px' , margin:'0'}}>
                           <List itemLayout="vertical" dataSource={this.props.replies} renderItem={( item , index  )=>
                               <List.Item  extra={`${ item.ups.length }人赞同`} key={ index }>
                                   <List.Item.Meta
                                       loading="true"
                                       avatar={<Avatar src={ item.author.avatar_url} />}
                                       description={ <p><Link to={ `/user/${ item.author.loginname }`}>{item.author.loginname }</Link>发表于 { item.create_at.split('T')[0]}</p> }
                                   />
                                   <div  dangerouslySetInnerHTML={{
                                       __html: item.content
                                   }}>
                                   </div>
                               </List.Item>
                           }/>
                       </Card>
                </div>
            </div>
        )
    }
}

export default connect( state=> state.details )(Details) ;
