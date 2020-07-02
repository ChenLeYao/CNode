import React from 'react';
import { Pagination } from 'antd';
function itemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <a>首页</a>;
    }
    if (type === 'next') {
        return <a>尾页</a>;
    }
    return originalElement;
};

export default  itemRender ;

