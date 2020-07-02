import React , { Component } from "react";
import { List, Avatar,  Col, Row , Spin , Pagination  } from 'antd';
import TextTag from '../textTag.js';
import {Link} from 'react-router-dom';
import MainMenu from "../main-menu";
import { connect } from 'react-redux';
import axios from 'axios';
import api from '../../api.js';
import  itemRender  from '../page.js';

class Index extends Component {
    constructor(props) {
        super(props);
        let { loading , data }  = this.props;
        this.state = {
            data  ,
            page : 1 ,
            loading
        };
    }
    componentDidMount() {
        this.getData( this.props );
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.getData( nextProps );
    }
    getData( props ){
        let tab = props.match.params.id;
        let _this = this;
        props.dispatch( ( dispatch ) =>{
            axios.get(`${api.topics}?tab=${tab}&page=${this.state.page}&limit=10`).then(data=>{
                _this.setState({
                    data : data.data.data ,
                    loading : false
                });
                  console.log(data);
            }).catch(e=>{
                   console.log(e);
              })
        })
    }
    render() {
        let container = <List itemLayout="horizontal" dataSource={this.state.data} renderItem={( item , index )=>
            <List.Item  actions={[`回复${ item.reply_count }`,`访问${item.visit_count}`]} key={ index }>
                <List.Item.Meta
                    loading="true"
                    avatar={<Avatar src={ item.author.avatar_url} />}
                    title={<Link to={ `/details/${ item.id }`}><TextTag content={ item }/>{ item.title }</Link>}
                    description={ <p><Link to={ `/user/${ item.author.loginname }`}>{item.author.loginname }</Link>发表于 { item.create_at.split('T')[0]}</p> }
                />
            </List.Item>
        }/>;
        return(
            <Row className="page_content">
                <Col md={6} xs={0}>
                    <MainMenu mode="vertical" tab={  this.props.match.params.id }/>
                </Col>
                <Col md={0} xs={24}>
                    <MainMenu mode="horizontal" tab={  this.props.match.params.id } style={{ height : '38px' , fontSize : '15px' }}/>
                </Col>
                <Col md={18} xs={24}>
                    <div style={{ padding : '0 10px'}}>
                        <Spin spinning={ this.state.loading } delay={ 1000 }>
                            { container }
                        </Spin>
                    </div>
                    <div style={ { display : 'flex' , marginTop: '20px' ,  justifyContent:'center' }}>
                        <Pagination onChange={()=>{ console.log('Yemao')}}  defaultCurrent={1} />
                    </div>
                </Col>
            </Row>
       )
    }
}
//hideOnSinglePage={true}
export default  connect( state => state.list )(Index) ;
