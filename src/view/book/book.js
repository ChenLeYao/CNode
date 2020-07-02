import React , { Component } from "react";
import data from "./data.js";
import {  Card } from 'antd';
const listData = data;
class Book  extends Component{
    render() {
        return(<div className="wrap no_padding">{
            listData.map( ( item , index ) =>
                <Card title={ item.title } type="inner" key={index}>
                    <div dangerouslySetInnerHTML={{
                        __html: item.content
                    }}>
                    </div>
                </Card>
            )
        }
        </div>)
    }
}

export default Book ;
