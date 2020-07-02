import React , { Component } from "react";
import {Card} from "antd";
import  data from './data.js';
import '../../index.css';
class About  extends Component{
    render(){
        return (<div className="wrap mate_content">
            {data.map((item,index)=>(<Card
                title={item.title}
                type="inner"
                key={index}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: item.content
                    }}
                >
                </div>
            </Card>))}
        </div>);
    }
}
export default About ;
