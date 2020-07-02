import React  , { Component }from 'react';
import { Layout , Row , Col , Divider ,  Dropdown , Button } from 'antd';
import Icon , { BarsOutlined} from '@ant-design/icons';
import Nav from './nav/nav.js';
import '../index.css';
class MainHeader extends  Component {


    render (){

        return(
            <div className="page_header_wrap">
                <Layout.Header>
                    <Row>
                        <Col md={6} xs={24}>
                            <h1>CNode</h1>
                        </Col>
                        <Col md={18}  xs={0}>
                            <Divider type="vertical"  className="header_divider" >
                                <Nav mode="horizontal" theme="dark" trigger={['click','touchend']} />
                           </Divider>
                        </Col>
                        <Col md={0} xs={24} className="xs_nav">
                            <Dropdown overlay={<Nav mode="vertical" theme="light"/> } >
                                 <Button>
                                     <Icon component={BarsOutlined}/>
                                 </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Layout.Header>
            </div>
        )
    }

}

export  default  MainHeader ;
