import { Tag } from 'antd';
import React  from "react";
export default function TextTag ( props ){
    let content = {
        ask : {
            title :  '问答' ,
            color : 'lime'
        } ,
        job :{
            title :  '招聘' ,
            color : 'cyan'
        },
        share : {
            title :  '分享' ,
            color : 'geekblue'
        },
        good : {
            title :  '精华' ,
            color : 'geekblue'
        }
    };
    if ( props.content.top  ){
       return <Tag color="red">置顶</Tag>;
    }else if ( props.content.good ){
        return <Tag color="geekblue">精华</Tag>;
    }else {

        return <Tag color= { content[props.content.tab].color }>{ content[props.content.tab].title }</Tag>;
    }

}
