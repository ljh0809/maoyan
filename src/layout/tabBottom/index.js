import React from 'react';
import {NavLink} from "react-router-dom";
import {TabWrapper} from "./styled";

function TabBottom(props) {
    return (
        <TabWrapper>
            <NavLink className="item" to="/home">
                <i />
                <span>首页</span>
            </NavLink>
            <NavLink className="item" to="/order">
                <i />
                <span>订单</span>
            </NavLink>
        </TabWrapper>
    );
}

export default TabBottom;